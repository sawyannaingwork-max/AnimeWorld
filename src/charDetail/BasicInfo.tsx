import useJikan from "../components/useJikan";
import CharacterBasicInfoSkeleton from "../loader/CharacterBasicInfoSkeleton";
import type { CharacterResponse } from "../type";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

import { useRef } from "react";
gsap.registerPlugin(SplitText)


export default function BasicInfo({id} : {id : string})
{
    const infoRef = useRef<HTMLDivElement | null>(null)
    // Fetching Data
    const { data, isFetching, isError } = useJikan<CharacterResponse>(["Char Basic Info", id], `https://api.jikan.moe/v4/characters/${id}`)

    useGSAP(() => {

        if (!infoRef.current)
        {
            return 
        }

        // Creating timeline
        const timeline = gsap.timeline()

        // Splitting text
        const split = new SplitText(".char-name", {
            type : "chars"
        })

        timeline.from(split.chars, {
            opacity : 0,
            y : -20,
            duration : 0.2,
            stagger : 0.1,
            ease : "sine"
        })

        timeline.from(".char-img", {
            opacity : 0,
            x : -20,
            duration : 0.6,
            ease : "sine"
        })

        timeline.from(".char-info", {
            y : 40,
            opacity : 0,
            duration : 0.5,
            ease : "circ"
        })

        return(() => {
            timeline.kill()
            split.revert()
        })
    }, { scope : infoRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <CharacterBasicInfoSkeleton />
    }

    if (isError || !data)
    {
        return <p>Something went wrong.Try again later.</p>
    }

    // Geting the data
    const character = data.data

    return(
        <div className="mt-9 w-[90%] mx-auto" ref={infoRef}>
            {
                character.name && <h1 className="char-name text-center font-alice text-3xl text-text">{character.name}</h1>
            }
            {
                character.images?.jpg?.image_url && <img className="char-img mt-5 mx-auto rounded-md shadow-lg shadow-gray-400 " src={character.images.jpg.image_url} alt={character.name? character.name : "Unknown"} />
            }

            {
                character.about && 
                <div className="char-info mt-9">
                    <h2 className="text-2xl font-alice mb-2">Character's Info</h2>
                    <p className="whitespace-pre-wrap text-text">
                        {character.about}
                    </p>
                </div>
            }
        </div>
    )
}