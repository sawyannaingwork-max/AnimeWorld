import { SwiperSlide } from "swiper/react"
import SwiperProvider from "../components/SwiperProvider"
import useJikan from "../components/useJikan"
import type { AnimeRecommandationResponse } from "../type"
import Anime from "../components/Anime"

export default function Recommand({id} : {id : string})
{
    // Fetching Data
    const { data, isFetching, isError } = useJikan<AnimeRecommandationResponse>(["Anime Recommandation", id], `https://api.jikan.moe/v4/anime/${id}/recommendations`)
    
    if (isFetching)
    {
        return <p>Loading...</p>
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const animes = data.data 

    if (animes.length === 0)
    {
        return 
    }

    return(
        <div className="mt-9">
            <h2 className="text-center pb-5 font-alice text-2xl text-text">Recommands</h2>
            <SwiperProvider>
                {
                    animes.map((anime, index) => {
                        return(
                            <SwiperSlide key={index}>
                                <Anime 
                                    id = {anime.entry.mal_id}
                                    title = {anime.entry.title ? anime.entry.title : null}
                                    image={anime.entry.images?.jpg?.image_url}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </SwiperProvider>
        </div>
    )
}