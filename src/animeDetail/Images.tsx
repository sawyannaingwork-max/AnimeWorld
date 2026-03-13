import { SwiperSlide } from "swiper/react";
import SwiperProvider from "../components/SwiperProvider";
import useJikan from "../components/useJikan";
import type { AnimeImageResponse } from "../type";
import AnimeImagesSkeleton from "../loader/AnimeImageSkeleton";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Images({id} : {id : string})
{
    const imageRef = useRef<HTMLDivElement | null>(null)

    // FEtching data
    const { data, isFetching, isError } = useJikan<AnimeImageResponse>(["Anime Images", id],`https://api.jikan.moe/v4/anime/${id}/pictures`)

    useGSAP(() => {
        
        if (!imageRef.current)
        {
            return 
        }

        gsap.from(imageRef.current, {
            y : -50,
            opacity : 0,
            duration : 2,
            ease : "sine",
            scrollTrigger : {
                trigger : imageRef.current,
                start : "top 50%"
            }
        })

    }, {scope : imageRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <AnimeImagesSkeleton />
    }

    if(isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const images = data.data 

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
                                <img className="w-56.25 h-75 mx-auto object-cover rounded-md" src={img.jpg.image_url} alt="Images" />
                            </SwiperSlide>
                        )
                    }
                })
            }
        </SwiperProvider>
        </div>
    )
}