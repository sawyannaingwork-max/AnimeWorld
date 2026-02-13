import AnimeSkeleton from "../loader/AnimeSkeleton";
import useJikan from "../components/useJikan";
import type { animeListResponseType } from "../type";
import SwiperProvider from "../components/SwiperProvider";
import Anime from "../components/Anime";
import { SwiperSlide } from "swiper/react";

export default function Airing()
{
    // Fetching Data
    const { data, isFetching, isError } = useJikan<animeListResponseType>(["Airing Anime"], "https://api.jikan.moe/v4/top/anime?filter=airing")

    if (isFetching)
    {
        return <AnimeSkeleton text="Airing" />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const animes = data.data 

    return(
        <div className="mt-9">
            <h1 className="text-center font-alice mb-5 text-2xl">Airing</h1>
            <SwiperProvider>
            {
                animes.map((anime, index) => {
                    return (
                        <SwiperSlide key={index}>
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