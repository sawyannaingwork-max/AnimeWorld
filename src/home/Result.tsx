
import Anime from "../components/Anime"
import ResultLoader from "../loader/ResultSkeleton"
import type { animeListResponseType } from "../type"

// Type for home props
interface ResultProps {
    isFetching : boolean,
    isError : boolean,
    page : number,
    data : animeListResponseType | undefined,
    setPage :  React.Dispatch<React.SetStateAction<number>>,
}

export default function Result({isFetching, isError, data, page, setPage} : ResultProps) 
{
    // before fetching state
    if (!isFetching && !isError && !data)
    {
        return 
    }

    if (isFetching)
    {
        return <ResultLoader />
    }

    if (isError)
    {
        return <p>Something went wrong.Try again later.</p>
    }

    if (!data)
    {
        return <p>There is no match for your search.</p>
    }

    const animes = data.data

    return (
        <div className="w-[90%] mx-auto pt-9">
            <h1 className="font-alice text-center text-2xl pb-5 text-text">Result</h1>
            <div className="mx-5 mb-4 flex justify-center gap-5 flex-wrap mt-5">
                {
                    data.pagination.current_page  && data.pagination.current_page > 1 &&
                    <button onClick={() => {
                        setPage(page - 1)
                    }} className="secondary-btn">Previous</button>
                }
                {
                    data.pagination.has_next_page && 
                    <button onClick={() => {
                        setPage(page + 1)
                    }} className="secondary-btn w-20">Next</button>
                }
            </div>
            <div className="flex flex-wrap gap-5">
                {
                    animes.map((anime, index) => {
                        return(
                            <Anime key={index}
                                image = {anime.images?.jpg?.image_url}
                                title = {anime.title_english}
                                id = {anime.mal_id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}