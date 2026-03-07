import Anime from "../components/Anime";
import useJikan from "../components/useJikan";
import CharacterAnimesSkeleton from "../loader/CharacterAnimeSkeleton";
import type { CharacterAnimeResponse } from "../type";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function Animes({id} : {id : string})
{
    const animeRef = useRef<HTMLDivElement | null>(null)

    // Fetching data
    const { data, isFetching, isError } = useJikan<CharacterAnimeResponse>(["Anime character anime", id], `https://api.jikan.moe/v4/characters/${id}/anime`)

    useGSAP(() => {
        if (!animeRef.current)
        {
            return 
        }

        const elements : HTMLDivElement[] = gsap.utils.toArray(animeRef.current.children)

        elements.forEach(element => {
            gsap.from(element, {
                y : 30,
                opacity : 0,
                ease : "sine",
                duration : 0.4,
                scrollTrigger : {
                    trigger : element,
                    start : "top 80%"
                }
            })
        })
    }, { scope : animeRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <CharacterAnimesSkeleton />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    // getting the data
    const animes = data.data

    if (animes.length === 0)
    {
        return 
    }

    return(
        <div className="mt-9 w-[90%] mx-auto">
            <h2 className="text-center text-2xl font-alice mb-5">Anime Appearance</h2>
            <div className="flex justify-center flex-wrap gap-10" ref={animeRef}>
                {
                    animes.map((anime, index) => {
                        return(
                            <Anime key={index}
                                id = {anime.anime?.mal_id ? anime.anime.mal_id : null}
                                title = {anime.anime.title}
                                image={anime.anime?.images?.jpg?.image_url}
                            />
                        )       
                    })
                }
            </div>
        </div>
    )
}