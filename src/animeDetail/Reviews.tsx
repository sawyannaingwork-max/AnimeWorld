import { useInfiniteQuery } from "@tanstack/react-query";
import type { AnimeReviewResponse } from "../type";
import Review from "./Review";
import { useEffect } from "react";
import AnimeReviewsSkeleton from "../loader/AnimeReviewSkeleton";
export default function Reviews({id} : {id : string})
{
    
    // Fetching Data Infinitely
    const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage, isError } = useInfiniteQuery<AnimeReviewResponse>({
        queryKey : ["Anime Review", id],
        initialPageParam : 1,
        queryFn : async function({ pageParam })
        {
            const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/reviews?page=${pageParam}`)

            if (!response.ok)
            {
                throw new Error("Something went wrong. Try again later")
            }

            const result = await response.json() 

            return result
        },
        getNextPageParam : (lastPage, allPages) => {
            if(!lastPage.pagination?.has_next_page)
            {
                return undefined
            }

            return allPages.length + 1
        }
    })  

    useEffect(() => {
    function handleScroll() {
        if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 10 &&
            hasNextPage &&
            !isFetchingNextPage
        ) {
            fetchNextPage()
        }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
        window.removeEventListener("scroll", handleScroll)
    }
    }, [hasNextPage, isFetchingNextPage, fetchNextPage])

    if (isLoading)
    {
        return <AnimeReviewsSkeleton />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const reviews = data.pages.flatMap((page) => page.data)

    return(
        <div className="mt-9 w-[90%] mx-auto">
            <h2 className="text-center pb-5 text-2xl text-text font-alice">Reviews</h2>
            <div>
                {
                    reviews.map((review, index) => {
                        return(
                            <Review key={index} {...review} />
                        )
                    })
                }
            </div>
            {
                isFetchingNextPage && <p>Loading More....</p>
            }
        </div>
    )

}