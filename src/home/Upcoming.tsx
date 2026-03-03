import SwiperProvider from "../components/SwiperProvider";
import useJikan from "../components/useJikan";
import type { animeListResponseType } from "../type";
import Anime from "../components/Anime";
import { SwiperSlide } from "swiper/react";
import AnimeSkeleton from "../loader/AnimeSkeleton";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function Upcoming()
{
    const upcomingRef = useRef<HTMLDivElement | null>(null)
    const { data, isFetching, isError } = useJikan<animeListResponseType>(["Upcoming Anime List"], "https://api.jikan.moe/v4/top/anime?filter=upcoming")

    useGSAP(() => {

        if (!upcomingRef.current)
        {
            return 
        }

        gsap.from(upcomingRef.current, {
            opacity : 0,
            y : 50,
            duration : 1.2,
            ease : "sine",
            scrollTrigger : {
                trigger : upcomingRef.current,
                start : "top bottom"
            }
        })

    }, { scope : upcomingRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <AnimeSkeleton text="Upcoming" />
    }

    if (isError || !data)
    {
        return <p>Error</p>
    }

    const animes = data.data

    return(
        <div className="mt-9" ref={upcomingRef}>
            <h1 className="text-center font-alice mb-5 text-2xl">Upcoming</h1>
            <SwiperProvider>
            {
                animes.map((anime, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Anime 
                                id = {anime.mal_id}
                                image = {anime.images?.jpg?.image_url}
                                title = {anime.title_english}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </SwiperProvider>
        </div>
    )
}