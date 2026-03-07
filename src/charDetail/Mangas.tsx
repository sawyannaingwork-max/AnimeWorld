import useJikan from "../components/useJikan";
import CharacterMangaSkeleton from "../loader/CharacterMangaSkeleton";
import type { characeterMangaResponse } from "../type";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function Mangas({id} : {id : string})
{
    const mangaRef = useRef<HTMLDivElement | null>(null)

    // Fetching the data
    const { data, isFetching, isError } = useJikan<characeterMangaResponse>(["Anime Character Manga", id], `https://api.jikan.moe/v4/characters/${id}/manga`)

    useGSAP(() => {
        if (!mangaRef.current)
        {
            return 
        }

        const elements : HTMLDivElement[] = gsap.utils.toArray(mangaRef.current.children)

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
    }, { scope : mangaRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <CharacterMangaSkeleton />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    // Getting mangas
    const mangas = data.data

    if (mangas.length === 0)
    {
        return 
    }

    return(
        <div className="mt-9 w-[90%] mx-auto">
            <h2 className="text-center font-alice text-2xl pb-5">Manga Appearance</h2>
            <div className="flex justify-center gap-10 flex-wrap" ref={mangaRef}>
                {
                    mangas.map((manga, index) => {
                        return(
                            <div key={index} className="w-55 mx-auto">
                                {
                                    manga.manga?.images?.jpg?.image_url && 
                                    <img className="w-full h-75 mx-auto object-cover rounded-md" src={manga.manga.images.jpg.image_url} alt={manga.manga?.title? manga.manga.title : "Unknown"} />
                                }
                                <h3 className="font-itim pt-2">{manga.manga?.title? manga.manga.title : "Unknown"}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}