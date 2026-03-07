import { useNavigate } from "react-router";
import useJikan from "../components/useJikan";
import type { AnimeStaffResponse } from "../type";
import AnimeStaffSkeleton from "../loader/AnimeStaffSkeleton";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)


export default function Staff({id} : {id : string})
{
    const navigate = useNavigate()
    
    const staffRef = useRef<HTMLDivElement | null>(null)
    // Fetching
    const { data, isFetching, isError } = useJikan<AnimeStaffResponse>(["Anime Staff", id], `https://api.jikan.moe/v4/anime/${id}/staff`)

    useGSAP(() => {

        if (!staffRef.current)
        {
            return 
        }

        // Getting the child of staffRef.current
        const elements : HTMLDivElement[] = gsap.utils.toArray(staffRef.current.children)

        elements.forEach(element => {
            gsap.from(element, {
                y : 30,
                opacity : 0,
                ease : "sine",
                scrollTrigger : {
                    trigger : element,
                    start : "top 80%"
                }
            })
        });
    }, { scope : staffRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <AnimeStaffSkeleton />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const staffs = data.data 

    if (staffs.length === 0)
    {
        return <p>No Staff List</p>
    }

    return(
        <div ref={staffRef} className="flex justify-between flex-wrap gap-5 mt-9 w-[90%] mx-auto">
            {
                staffs.map((staff, index) => {
                    return(
                        <div key={index} className="w-50 mx-auto cursor-pointer" onClick={() => navigate(`/people/${staff.person.mal_id}`)}>
                            {
                                staff.person.images?.jpg?.image_url && 
                                <img className="shadow-md shadow-gray-600 rounded-md w-full h-75 object-cover" src={staff.person.images.jpg.image_url} alt={staff.person.name? staff.person.name : "Unknown"} />
                            }
                            <h3 className="font-itim font-bold py-2">{staff.person.name? staff.person.name : "Unknown"}</h3>
                            <div className="flex flex-wrap gap-x-2 gap-y-1">
                                {
                                    staff.positions.map((position, index) => {
                                        return(
                                            <p key={index} className="tag">{position}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}