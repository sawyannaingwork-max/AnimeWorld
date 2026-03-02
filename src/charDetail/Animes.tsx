import Anime from "../components/Anime";
import useJikan from "../components/useJikan";
import type { CharacterAnimeResponse } from "../type";

export default function Animes({id} : {id : string})
{
    // Fetching data
    const { data, isFetching, isError } = useJikan<CharacterAnimeResponse>(["Anime character anime", id], `https://api.jikan.moe/v4/characters/${id}/anime`)

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    // getting the data
    const animes = data.data

    return(
        <div className="mt-9 w-[90%] mx-auto">
            <h2 className="text-center text-2xl font-alice mb-5">Anime Appearance</h2>
            <div className="flex justify-center flex-wrap gap-10">
                {
                    animes.map((anime, index) => {
                        return(
                            <Anime key={index}
                                id = {anime.anime?.mal_id ? anime.anime.mal_id : null}
                                title = {anime.anime.title}
                                image={anime.anime?.images?.jpg?.image_url}
                            />
                        )       
                    })
                }
            </div>
        </div>
    )
}