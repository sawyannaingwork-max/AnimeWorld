import { SwiperSlide } from "swiper/react";
import SwiperProvider from "../components/SwiperProvider";
import useJikan from "../components/useJikan";
import  type { PersonAnimeResponse } from "../type";
import Anime from "../components/Anime";
import PersonAnimeSkeleton from "../loader/PersonAnimeSkeleton";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function Animes({id} : {id : string})
{
    const animeRef = useRef<HTMLDivElement | null>(null)

    const { data, isFetching, isError } = useJikan<PersonAnimeResponse>(["Person Aniimes", id], `https://api.jikan.moe/v4/people/${id}/anime`)

    useGSAP(() => {
        if (!animeRef.current)
        {
            return 
        }

        gsap.from(animeRef.current, {
            y : -40,
            opacity : 0,
            duration : 0.6,
            ease : "sine",
            scrollTrigger : {
                trigger : animeRef.current,
                start : "top 80%"
            }
        })
    }, { scope : animeRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <PersonAnimeSkeleton />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const animes = data.data 

    if (animes.length === 0)
    {
        return
    }

    return(
        <div className="mt-9">
            <h2 className="text-center text-2xl font-alice mb-5">Anime Appearance</h2>
            <div ref={animeRef}>
                <SwiperProvider>
                {
                    animes.map((anime, index) => {
                        return(
                            <SwiperSlide key={index}>
                                <Anime 
                                    id = {anime.anime.mal_id || null}
                                    image = {anime.anime.images?.jpg?.image_url}
                                    title={anime.anime.title}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </SwiperProvider>
            </div>
        </div>
    )
}