import { SwiperSlide } from "swiper/react";
import SwiperProvider from "../components/SwiperProvider";
import useJikan from "../components/useJikan";
import type { PersonImageResponse } from "../type";
import AnimeImagesSkeleton from "../loader/AnimeImageSkeleton";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export default function Images({id} : {id : string})
{
    const imageRef = useRef<HTMLDivElement | null>(null)
    
    // Fetching Data
    const { data, isFetching, isError } = useJikan<PersonImageResponse>(["Person Pictures", id], `https://api.jikan.moe/v4/people/${id}/pictures`)

    useGSAP(() => {
        if (!imageRef.current)
        {
            return 
        }

        gsap.from(imageRef.current, {
            x : -40,
            opacity : 0,
            duration : 0.6,
            ease : "sine",
            scrollTrigger : {
                trigger : imageRef.current,
                start : "top 80%"
            }
        })
    }, { scope : imageRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <AnimeImagesSkeleton />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const images = data.data 


    if (images.length === 0)
    {
        return
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