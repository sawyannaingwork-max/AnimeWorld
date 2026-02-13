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
        staleTime : 1000 * 60 * 60 * 24,
        placeholderData : keepPreviousData 
    })

    return(
        <div className="bg-background">
            <Header 
                search={search}
                setSearch={setSearch}
                setApplySearch={setApplySearch}
                setPage={setPage}
            />
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <Home 
                            isFetching = {isFetching}
                            isError = {isError}
                            data = {data}
                            page = {page}
                            setPage = {setPage}

                        />
                    } 
                />
            </Routes>
        </div>
    )
}