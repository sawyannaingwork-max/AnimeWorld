import useJikan from "../components/useJikan";
import PersonBasicInfoSkeleton from "../loader/PersonBasicInfoSkeleton";
import type { PersonResponse } from "../type";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

import { useRef } from "react";

gsap.registerPlugin(SplitText)


export default function BasicInfo({id} : {id : string})
{   
    const infoRef = useRef<HTMLDivElement | null>(null)

    // Fetching data
    const { data, isFetching, isError } = useJikan<PersonResponse>(["Person Basic Info", id], `https://api.jikan.moe/v4/people/${id}`)

    useGSAP(() => {

        if (!infoRef.current)
        {
            return 
        }

        // Creating timeline
        const timeline = gsap.timeline()

        // Splitting text
        const split = new SplitText(".person-name", {
            type : "chars"
        })

        timeline.from(".person-img", {
            opacity : 0,
            y : -50,
            duration : 1,
            ease : "sine"
        })

        timeline.from(split.chars, {
            y : -30,
            opacity : 0,
            duration : 0.3,
            stagger : 0.1
        })

        timeline.from(".person-about", {
            opacity : 0,
            x : -30,
            duration : 0.5,
            ease : "sine"
        })

        return(() => {
            timeline.kill()
            split.revert()
        })

    }, {scope : infoRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <PersonBasicInfoSkeleton />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const person = data.data 

    return(
        <div className="flex justify-center gap-5 w-[90%] mx-auto items-start" ref={infoRef}>
            {
                person.images?.jpg?.image_url && 
                <img className="person-img rounded-md shadow-md shadow-gray-400" src={person.images.jpg.image_url} alt={person.name? person.name : "Unknown"} />
            }
            <div>
                <h2 className="person-name text-2xl font-itim pb-2">{person.name? person.name : "Unknown"}</h2>
                {
                    person.about && 
                    <p className="person-about whitespace-pre-wrap">{person.about}</p>
                }
            </div>
        </div>
    )
}