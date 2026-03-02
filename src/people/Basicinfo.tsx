import useJikan from "../components/useJikan";
import type { PersonResponse } from "../type";

export default function BasicInfo({id} : {id : string})
{
    // Fetching data
    const { data, isFetching, isError } = useJikan<PersonResponse>(["Person Basic Info", id], `https://api.jikan.moe/v4/people/${id}`)

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const person = data.data 

    return(
        <div className="flex justify-center gap-5 w-[90%] mx-auto items-start">
            {
                person.images?.jpg?.image_url && 
                <img className="rounded-md shadow-md shadow-gray-400" src={person.images.jpg.image_url} alt={person.name? person.name : "Unknown"} />
            }
            <div>
                <h2 className="text-2xl font-itim pb-2">{person.name? person.name : "Unknown"}</h2>
                {
                    person.about && 
                    <p className="whitespace-pre-wrap">{person.about}</p>
                }
            </div>
        </div>
    )
}