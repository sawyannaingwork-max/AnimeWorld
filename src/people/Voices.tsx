import useJikan from "../components/useJikan";
import type { PersonVoiceResponse } from "../type";
import VoiceCard from "./VoiceCard";

export default function Voices({id} : {id : string})
{
    // Fetching Data
    const { data, isFetching, isError } = useJikan<PersonVoiceResponse>(["Anime Voices Person", id], `https://api.jikan.moe/v4/people/${id}/voices`)

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Please Try again later.</p>
    }

    // Getting the list of voices
    const voices = data.data

    return(
        <div className="mt-9 w-[90%] mx-auto">
            <h2 className="text-center text-2xl font-alice text-text mb-5">Voices</h2>
            <div className="flex flex-wrap gap-10 justify-center">
                {
                    voices.map((voice, index) => {
                        return(
                            <VoiceCard 
                                key = {index}
                                {...voice}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}