import { useNavigate } from "react-router";
import useJikan from "../components/useJikan";
import type { CharacterVoiceResponse } from "../type";

export default function Voices({id} : {id : string})
{
    const navigate = useNavigate()

    // Fetching Data
    const { data, isFetching, isError } = useJikan<CharacterVoiceResponse>(["Voices Actors Character", id], `https://api.jikan.moe/v4/characters/${id}/voices`)

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later</p>
    }

    // Getting data
    const voices = data.data

    return(
        <div className="mt-9 w-[90%] mx-auto">
            <h2 className="text-center text-2xl font-alice mb-5">Voices Actors</h2>
            <div className="flex justify-center flex-wrap gap-10">
                {
                    voices.map((voice, index) => {
                        return(
                            <div key={index} className="w-55 mx-auto cursor-pointer" onClick={() => navigate(`/people/${voice.person.mal_id}`)}>
                                {
                                    voice.person?.images?.jpg?.image_url && 
                                    <img className="shadow-md shadow-gray-500 rounded-md w-full h-87.5 object-cover object-center" src={voice.person.images.jpg.image_url} alt={voice.person.name? voice.person.name : "Unkonwn"} />
                                }
                                <h3 className="mt-2 font-itim text-text">{voice.person.name? voice.person.name : "Unknown"} ({voice.language? voice.language : "Unknown"})</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}