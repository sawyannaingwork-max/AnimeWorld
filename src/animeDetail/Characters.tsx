import { SwiperSlide } from "swiper/react"
import SwiperProvider from "../components/SwiperProvider"
import useJikan from "../components/useJikan"
import type { AnimeCharacterResponse } from "../type"
import { useNavigate } from "react-router"
import AnimeCharacterSkeleton from "./../loader/AnimeCharacterSkeleton"
import { useRef } from "react"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)


export default function Characters({id} : {id : string})
{
    // For navigating
    const navigate = useNavigate()

    const characterRef = useRef<HTMLDivElement | null>(null)

    // Fetching data
    const { data, isFetching, isError } = useJikan<AnimeCharacterResponse>(["Anime Characters", id], `https://api.jikan.moe/v4/anime/${id}/characters`)

    useGSAP(() => {

        if (!characterRef.current)
        {
            return 
        }

        gsap.from(characterRef.current, {
            y : 50,
            opacity : 0,
            duration : 2,
            scrollTrigger : {
                trigger : characterRef.current,
                start : "top 70%"
            }
        })

    }, { scope : characterRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <AnimeCharacterSkeleton />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later</p>
    }
    
    const characters = data.data 

    if (characters.length === 0)
    {
        return 
    }

    return(
        <div className="mt-9" ref={characterRef}>
            <h2 className="text-2xl font-alice text-center pb-5">Characters</h2>
            <SwiperProvider>
                {
                    characters.map((char, index) => {
                        if (char.character?.images?.jpg?.image_url)
                        {
                            return(
                                <SwiperSlide key={index}>
                                    <div className="w-56.25 h-75 mx-auto relative">
                                        <img className="w-full h-full rounded-md mx-auto object-cover" src={char.character.images.jpg.image_url} alt={char.character?.name ? char.character.name : "Unknown"} />
                                        <div className="bg-text px-2 py-2 absolute bottom-0 w-full rounded-br-md rounded-bl-md">
                                            <h3 className="text-secondary font-itim pb-2">{char.character?.name ? char.character.name : "Unknown"} <span className="text-primary">({char.role && char.role})</span></h3>
                                            {
                                                char.character?.mal_id && 
                                                <button onClick={() => navigate(`/character/${char.character.mal_id}`)} className="primary-btn">Look Detail</button>
                                            }
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    })
                }
            </SwiperProvider>
        </div>
    )
}