import { SwiperSlide } from "swiper/react"
import SwiperProvider from "../components/SwiperProvider"
import useJikan from "../components/useJikan"
import type { AnimeRecommandationResponse } from "../type"
import Anime from "../components/Anime"
import AnimeRecommandSkeleton from "../loader/AnimeRecommandSkeleton"
import { useRef } from "react"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)


export default function Recommand({id} : {id : string})
{
    const recommandRef = useRef<HTMLDivElement | null>(null)

    // Fetching Data
    const { data, isFetching, isError } = useJikan<AnimeRecommandationResponse>(["Anime Recommandation", id], `https://api.jikan.moe/v4/anime/${id}/recommendations`)
    
    useGSAP(() => {

        if (!recommandRef.current)
        {
            return 
        }

        gsap.from(recommandRef.current, {
            y : 50,
            opacity : 0,
            duration : 0.7,
            ease : "sine",
            scrollTrigger : {
                trigger : recommandRef.current,
                start : "top 70%"
            }
        })
    }, {scope : recommandRef, dependencies : [isFetching]})
    if (isFetching)
    {
        return <AnimeRecommandSkeleton />
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

    if (animes.length < 5)
    {
        return(
            <div className="mt-9 w-[90%] mx-auto">
                <h2 className="text-center font-alice text-2xl mb-5">Recommands</h2>
                <div className="flex gap-10 flex-wrap justify-center">
                    {
                        animes.map((anime, index) => {
                            return(
                                    <Anime 
                                        key = {index}
                                        id = {anime.entry.mal_id}
                                        title = {anime.entry.title ? anime.entry.title : null}
                                        image={anime.entry.images?.jpg?.image_url}
                                    />
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    return(
        <div className="mt-9" ref={recommandRef}>
            <h2 className="text-center pb-5 font-alice text-2xl text-text">Recommands</h2>
            <SwiperProvider>
                {
                    animes.map((anime, index) => {
                        return(
                            <SwiperSlide key={index}>
                                <Anime 
                                    id = {anime.entry.mal_id}
                                    title = {anime.entry.title ? anime.entry.title : null}
                                    image={anime.entry.images?.jpg?.image_url}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </SwiperProvider>
        </div>
    )
}