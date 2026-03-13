import type { animeListResponseType } from "../type";
import Airing from "./Airing";
import Favorite from "./Favorite";
import Popular from "./Popular";
import Result from "./Result";
import Upcoming from "./Upcoming";

import { useEffect, useRef, useState } from "react";
import {useQuery } from "@tanstack/react-query";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export default function Home()
{
    // Defining state for search bar of header
    const [search, setSearch] = useState<string>("")

    const heroRef = useRef<HTMLDivElement | null>(null)

    // Defining state for apply search
    const [applySearch, setApplySearch] = useState<string>("")

    // Defining state for resulted page navigation
    const [page, setPage] = useState<number>(1)

    // Querying
    const { data, isFetching, isError } = useQuery<animeListResponseType>({
        queryKey : ["Anime Search", page, applySearch],
        queryFn : async function()
        {
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${applySearch}&page=${page}`)

            if (!response.ok)
            {
                throw new Error("Fetching Fail")
            }

            const result = await response.json()

            return result
        },
        enabled : !!applySearch,
        staleTime : 1000 * 60 * 60 * 24
    })

    function handleSubmit(e : React.SubmitEvent<HTMLFormElement>)
    {
        e.preventDefault()
        setApplySearch(search)
        setPage(1)
    }

    // Animation
    useGSAP(() => {
        gsap.to(heroRef.current, {
            height : "50vh",
            duration : 2,
            ease : "sine",
            scrollTrigger : {
                trigger : heroRef.current,
                start : "top top",
                end : "+400",
            }
        })
    }, {scope : heroRef, dependencies : []})

    // SCroll bar at the top
    useEffect(() => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }, [])
    return(
        <>
            <div ref={heroRef} className="text-background  font-albert bg-linear-to-tr from-secondary to-primary h-screen flex flex-col text-center justify-center gap-10">
                <h1 className="w-[90%] mx-auto text-3xl">Your Gateway to the Anime Universe</h1>
                <p className="w-[90%] mx-auto text-xl">From timeless classics to the latest releases, dive deep into worlds that inspire, move, and excite.</p>
                <form onSubmit={handleSubmit} className="w-[90%] mx-auto flex" action="#">
                    <input className="border border-prim w-[80%] text-background border-background px-2 font-itim rounded-sm focus:outline-none" type="text" name="anime" id="anime" placeholder="Search Anime:" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button className="secondary-btn w-[20%]">Search</button>
                </form>
            </div>
            <div id="anime-list" className="pt-9">
                <Result 
                    isFetching = {isFetching}
                    isError = {isError}
                    data = {data}
                    page = {page}
                    setPage = {setPage}
                />
                <Popular />
                <Favorite />
                <Airing />
                <Upcoming />
            </div>
        </>
    )
}