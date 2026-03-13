import { SwiperSlide } from "swiper/react";
import SwiperProvider from "../components/SwiperProvider";
import useJikan from "../components/useJikan";
import type { CharacterPicResponse } from "../type";
import AnimeImagesSkeleton from "../loader/AnimeImageSkeleton";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)


export default function Images({id} : {id : string})
{
    const imageRef = useRef<HTMLDivElement | null>(null)

    // Fetching data
    const { data, isFetching, isError } = useJikan<CharacterPicResponse>(["Anime Character Pictures", id], `https://api.jikan.moe/v4/characters/${id}/pictures`)

    useGSAP(() => {

        if (!imageRef.current)
        {
            return 
        }

        gsap.from(imageRef.current, {
            y : -60,
            opacity : 0,
            duration : 0.6,
            ease : "sine",
            scrollTrigger : {
                trigger : imageRef.current,
                start : "top top"
            }
        })
    }, {scope : imageRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <AnimeImagesSkeleton />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later</p>
    }

    // Getting the images list 
    const images = data.data

    // for not image
    if (images.length === 0)
    {
        return 
    }

    if (images.length < 5)
    {
        return(
            <div className="flex justify-center gap-10 flex-wrap mt-9 w-[90%] mx-auto">
                {
                images.map((img, index) => {
                    if (img.jpg?.image_url)
                    {
                        return(
                            <img key={index} className="w-56.25 h-75 mx-auto object-cover rounded-md" src={img.jpg.image_url} alt="Image" /> 
                        )
                    }

                    return
                })
            }
            </div>
        )
    }

    return(
        <div className="mt-9" ref={imageRef}>
            <SwiperProvider>
            {
                images.map((img, index) => {
                    if (img.jpg?.image_url)
                    {
                        return(
                            <SwiperSlide key={index}>
                                <img  className="w-56.25 h-75 mx-auto object-cover rounded-md" src={img.jpg.image_url} alt="Image" />
                            </SwiperSlide>
                        )
                    }

                    return
                })
            }
        </SwiperProvider>
        </div>
    )
}