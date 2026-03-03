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

export default function Favorite()
{
    const favoriteRef = useRef<HTMLDivElement | null>(null)
    // Fetching Data
    const { data, isFetching, isError } = useJikan<animeListResponseType>(["Favorite Anime"], "https://api.jikan.moe/v4/top/anime?filter=favorite")

    useGSAP(() => {

        if (!favoriteRef.current)
        {
            return 
        }

        gsap.from(favoriteRef.current, {
            opacity : 0,
            y : -50,
            duration : 1.2,
            ease : "sine",
            scrollTrigger : {
                trigger : favoriteRef.current,
                start : "top bottom"
            }
        })

    }, { scope : favoriteRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <AnimeSkeleton text="Favorite" />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const animes = data.data 

    return(
        <div className="mt-9" ref={favoriteRef}>
            <h1 className="text-center font-alice mb-5 text-2xl">Favorite</h1>
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