import SwiperProvider from "../components/SwiperProvider";
import useJikan from "../components/useJikan";
import type { animeListResponseType } from "../type";
import Anime from "../components/Anime";
import { SwiperSlide } from "swiper/react";
import AnimeSkeleton from "../components/AnimeSkeleton";

export default function Popular()
{
    const { data, isFetching, isError } = useJikan<animeListResponseType>(["Popular Anime List"], "https://api.jikan.moe/v4/top/anime?filter=bypopularity")

    if (isFetching)
    {
        return <AnimeSkeleton />
    }

    if (isError || !data)
    {
        return <p>Error</p>
    }

    const animes = data.data

    return(
        <div className="mt-9">
            <h1 className="text-center font-alice mb-5 text-2xl">Popular</h1>
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