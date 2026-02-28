import useJikan from "../components/useJikan";
import type { characeterMangaResponse } from "../type";

export default function Mangas({id} : {id : string})
{
    // Fetching the data
    const { data, isFetching, isError } = useJikan<characeterMangaResponse>(["Anime Character Manga", id], `https://api.jikan.moe/v4/characters/${id}/manga`)

    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    // Getting mangas
    const mangas = data.data

    return(
        <div className="mt-9 w-[90%] mx-auto">
            <h2 className="text-center font-alice text-2xl pb-5">Manga Appearance</h2>
            <div className="flex justify-center gap-5 flex-wrap">
                {
                    mangas.map((manga, index) => {
                        return(
                            <div key={index} className="w-55">
                                {
                                    manga.manga?.images?.jpg?.image_url && 
                                    <img className="w-full h-75 mx-auto object-cover rounded-md" src={manga.manga.images.jpg.image_url} alt={manga.manga?.title? manga.manga.title : "Unknown"} />
                                }
                                <h3 className="font-itim pt-2">{manga.manga?.title? manga.manga.title : "Unknown"}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}