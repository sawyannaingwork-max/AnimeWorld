import { useRef, useState } from "react"
import useJikan from "../components/useJikan"
import type { AnimeEpisodeResponse } from "../type"
import AnimeEpisodesSkeleton from "../loader/AnimeEpisodeSkeleton"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)


export default function Episodes({id} : {id : string})
{
    // Defining state
    const [page, setPage] = useState<number>(1)

    const episodeRef = useRef<HTMLDivElement | null>(null)

    // Fetching data
    const { data, isFetching, isError } = useJikan<AnimeEpisodeResponse>(["Anime Episodes", id, page], `https://api.jikan.moe/v4/anime/${id}/episodes?page=${page}`)
    
    useGSAP(() => {
        if (!episodeRef.current)
        {
            return 
        }

        gsap.from(episodeRef.current, {
            opacity : 0,
            x : -50,
            duration : 2,
            ease : "sine",
            scrollTrigger : {
                trigger : episodeRef.current,
                start : "top 70%"
            }
        })
    }, { scope : episodeRef, dependencies : [isFetching]})

    if (isFetching)
    {
        return <AnimeEpisodesSkeleton />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const episodes = data.data 

    if (episodes.length === 0)
    {
        return
    }

    return(
        <div className="w-[90%] mx-auto mt-9" ref={episodeRef}>
            <h2 className="mb-5 text-center text-2xl font-alice">Episodes</h2>
            <table className="w-full">
                <thead className="bg-primary text-background font-albert">
                    <tr>
                        <th className="py-2 w-[40%] text-left px-2">Title</th>
                        <th className="py-2 w-[15%]">Score</th>
                        <th className="py-2 w-[30%]">Aired</th>
                        <th className="py-2 w-[15%]">Filter</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        episodes.map((ep, index) => {
                            return(
                                <tr key={index} className="bg-background">
                                    <td className="px-2 py-2">{ep.title? ep.title : "Unknown"}</td>
                                    <td className="text-center py-2">{ep.score? ep.score : "Unknown"}</td>
                                    <td className="text-center py-2">{ep.aired? ep.aired.split("T")[0] : "Unknown"}</td>
                                    <td className="text-center py-2">{ep.filter? "Yes" : "No"}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="mt-5 flex justify-between">
                {
                    page > 1 && 
                    <button onClick={() => setPage(page - 1)} className="secondary-btn">Previous</button>
                }
                {
                    data.pagination.has_next_page && 
                    <button onClick={() => setPage(page + 1)} className="secondary-btn">Next</button>
                }
            </div>
            
        </div>
    )
}