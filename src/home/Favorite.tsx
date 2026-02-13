import AnimeSkeleton from "../loader/AnimeSkeleton";
import useJikan from "../components/useJikan";
import type { animeListResponseType } from "../type";
import SwiperProvider from "../components/SwiperProvider";
import Anime from "../components/Anime";
import { SwiperSlide } from "swiper/react";

export default function Favorite()
{
    // Fetching Data
    const { data, isFetching, isError } = useJikan<animeListResponseType>(["Favorite Anime"], "https://api.jikan.moe/v4/top/anime?filter=favorite")

    if (isFetching)
    {
        return <AnimeSkeleton text="Favorite" />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const animes = data.data 

    return(
        <div className="mt-9">
            <h1 className="text-center font-alice mb-5 text-2xl">Favorite</h1>
            <SwiperProvider>
            {
                animes.map(anime => {
                    return (
                        <SwiperSlide key={anime.mal_id}>
                            <Anime 
                                id = {anime.mal_id}
                                image = {anime.images?.jpg?.image_url}
                                title = {anime.title_english}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </SwiperProvider>
        </div>
    )
}