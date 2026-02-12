import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom'
import Home from "./home/Home"
import { useState } from "react"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import type { animeListResponseType } from "./type"

export default function App()
{
    // Defining state for search bar of header
    const [search, setSearch] = useState<string>("")

    // Defining state for resulted page navigation
    const [page, setPage] = useState<number>(1)

    // Querying
    const { data, isFetching, isError, refetch } = useQuery<animeListResponseType>({
        queryKey : ["Anime Search", page, search],
        queryFn : async function()
        {
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`)

            if (!response.ok)
            {
                throw new Error("Fetching Fail")
            }

            const result = await response.json()

            return result
        },
        enabled : false,
        staleTime : 1000 * 60 * 60 * 24,
        placeholderData : keepPreviousData 
    })

    return(
        <div className="bg-background">
            <Header 
                search={search}
                setSearch={setSearch}
                refetch={refetch}
            />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}