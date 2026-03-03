import AnimeSkeleton from "../loader/AnimeSkeleton";
import useJikan from "../components/useJikan";
import type { animeListResponseType } from "../type";
import SwiperProvider from "../components/SwiperProvider";
import Anime from "../components/Anime";
import { SwiperSlide } from "swiper/react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function Airing()
{
    const airingRef = useRef<HTMLDivElement | null>(null)

    // Fetching Data
    const { data, isFetching, isError } = useJikan<animeListResponseType>(["Airing Anime"], "https://api.jikan.moe/v4/top/anime?filter=airing")

    useGSAP(() => {

        if (!airingRef.current)
        {
            return 
        }

        gsap.from(airingRef.current, {
            opacity : 0,
            x : -50,
            duration : 1.2,
            ease : "sine",
            scrollTrigger : {
                trigger : airingRef.current,
                start : "top bottom"
            }
        })

    }, { scope : airingRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <AnimeSkeleton text="Airing" />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const animes = data.data 

    return(
        <div className="mt-9" ref={airingRef}>
            <h1 className="text-center font-alice mb-5 text-2xl">Airing</h1>
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