import useJikan from "../components/useJikan";
import type { CharacterResponse } from "../type";

export default function BasicInfo({id} : {id : string})
{
    // Fetching Data
    const { data, isFetching, isError } = useJikan<CharacterResponse>(["Char Basic Info", id], `https://api.jikan.moe/v4/characters/${id}`)

    if (isFetching)
    {
        return <p>Loading..</p>
    }

    if (isError || !data)
    {
        return <p>Something went wrong.Try again later.</p>
    }

    // Geting the data
    const character = data.data

    return(
        <div className="mt-9 w-[90%] mx-auto">
            {
                character.name && <h1 className="text-center font-alice text-3xl text-text">{character.name}</h1>
            }
            {
                character.images?.jpg?.image_url && <img className="mt-5 mx-auto rounded-md shadow-lg shadow-gray-400 " src={character.images.jpg.image_url} alt={character.name? character.name : "Unknown"} />
            }

            {
                character.about && 
                <div className="mt-9">
                    <h2 className="text-2xl font-alice mb-2">Character's Info</h2>
                    <p className="whitespace-pre-wrap text-text">
                        {character.about}
                    </p>
                </div>
            }
        </div>
    )
}