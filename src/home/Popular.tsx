import SwiperProvider from "../components/SwiperProvider";
import useJikan from "../components/useJikan";
import type { animeListResponseType } from "../type";
import Anime from "../components/Anime";
import { SwiperSlide } from "swiper/react";
import AnimeSkeleton from "../loader/AnimeSkeleton";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export default function Popular()
{
    const popularRef = useRef<HTMLDivElement | null>(null)

    const { data, isFetching, isError } = useJikan<animeListResponseType>(["Popular Anime List"], "https://api.jikan.moe/v4/top/anime?filter=bypopularity")

    useGSAP(() => {

        if (!popularRef.current)
        {
            return 
        }

        gsap.from(popularRef.current, {
            opacity : 0,
            y : 50,
            duration : 1.2,
            ease : "sine",
            scrollTrigger : {
                trigger : popularRef.current,
                start : "top bottom"
            }
        })

    }, { scope : popularRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <AnimeSkeleton text="Popular" />
    }

    if (isError || !data)
    {
        return <p>Error</p>
    }

    const animes = data.data

    return(
        <div className="mt-9" ref={popularRef}>
            <h1 className="text-center font-alice mb-5 text-2xl">Popular</h1>
            <SwiperProvider>
            {
                animes.map((anime, index)=> {
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