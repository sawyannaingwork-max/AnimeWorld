import useJikan from "../components/useJikan";
import AnimeCardSkeleton from "../loader/AnimeCardSkeleton";
import type { animeListResponseType, InputType } from "./../type";
import AnimeCard from "./AnimeCard";

// Type for Rsult Props
interface ResultProps{
    input : InputType,
    page : number,
    setPage : React.Dispatch<React.SetStateAction<number>>
}
export default function Result({input, page, setPage} : ResultProps)
{
    // Creating url
    const url = buildUrl(input, String(page))

    // Fetching data
    const { data, isFetching, isError } = useJikan<animeListResponseType>([input.rating, input.type, input.filter, page], url)

    if (isFetching)
    {
        return <AnimeCardSkeleton />
    }

    if (isError)
    {
        return <p>Something went wrong.</p>
    }

    if (!data || data.data.length === 0)
    {
        return <p>There is no match for your search</p>
    }

    console.log(data)
    const pagination = data.pagination
    const animes = data.data

    return (
        <div className="w-[90%] mx-auto">
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                {
                    animes.map((anime, index) => {
                        return(
                            <AnimeCard key={index}
                                {...anime}
                            />
                        )
                    })
                }
            </div>
            <div className="flex justify-between mt-5">
                {
                    pagination.current_page && pagination.current_page > 1 && 
                    <button onClick={() => setPage(page - 1)} className="primary-btn">Previous</button>
                }
                {
                    pagination.has_next_page && 
                    <button onClick={() => setPage(page + 1)} className="primary-btn">Next</button>
                }
            </div>
        </div>
    )
}


// Function for building url
function buildUrl(input : InputType, page : string) : string
{
    const params = new URLSearchParams()

    if (input.type)
    {
        params.append("type", input.type)
    }

    if (input.filter)
    {
        params.append("filter", input.filter)
    }

    if (input.rating)
    {
        params.append("rating", input.rating)
    }
    
    if (page)
    {
        params.append("page", page)
    }

    return `https://api.jikan.moe/v4/top/anime?${params.toString()}`
}