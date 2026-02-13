import { useQuery } from "@tanstack/react-query";
import type { QueryKey } from "@tanstack/react-query";

export default function useJikan<T>(key : QueryKey, url : string)
{
    const { data, isFetching, isError } = useQuery<T>({
        queryKey : key,
        queryFn : async function()
        {
            const response = await fetch(url)

            if (!response.ok)
            {
                throw new Error("Something went wrong")
            }

            const result = await response.json()
            return result
        },
        staleTime : 24 * 60 * 60 * 1000
    })

    return { data, isFetching, isError}
}