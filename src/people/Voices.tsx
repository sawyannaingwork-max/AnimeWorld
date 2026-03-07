import useJikan from "../components/useJikan";
import PersonVoicesSkeleton from "../loader/PersonVoicesSkeleton";
import type { PersonVoiceResponse } from "../type";
import VoiceCard from "./VoiceCard";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export default function Voices({id} : {id : string})
{
    const voiceRef = useRef<HTMLDivElement | null>(null)

    // Fetching Data
    const { data, isFetching, isError } = useJikan<PersonVoiceResponse>(["Anime Voices Person", id], `https://api.jikan.moe/v4/people/${id}/voices`)

    useGSAP(() => {
        if (!voiceRef.current)
        {
            return 
        }

        const elements : HTMLDivElement[] = gsap.utils.toArray(voiceRef.current.children)

        elements.forEach(element => {
            gsap.from(element, {
            y : 40,
            opacity : 0,
            duration : 0.6,
            ease : "sine",
            scrollTrigger : {
                trigger : element,
                start : "top 80%"
            }
        })
        })

    }, { scope : voiceRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <PersonVoicesSkeleton />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Please Try again later.</p>
    }

    // Getting the list of voices
    const voices = data.data

    if (voices.length === 0)
    {
        return
    }

    return(
        <div className="mt-9 w-[90%] mx-auto">
            <h2 className="text-center text-2xl font-alice text-text mb-5">Voices</h2>
            <div className="flex flex-wrap gap-10 justify-center" ref={voiceRef}>
                {
                    voices.map((voice, index) => {
                        return(
                            <VoiceCard 
                                key = {index}
                                {...voice}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}