import { SwiperSlide } from "swiper/react";
import SwiperProvider from "../components/SwiperProvider";
import useJikan from "../components/useJikan";
import  type { PersonAnimeResponse } from "../type";
import Anime from "../components/Anime";
import PersonAnimeSkeleton from "../loader/PersonAnimeSkeleton";

export default function Animes({id} : {id : string})
{
    const { data, isFetching, isError } = useJikan<PersonAnimeResponse>(["Person Aniimes", id], `https://api.jikan.moe/v4/people/${id}/anime`)

    if (isFetching)
    {
        return <PersonAnimeSkeleton />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const animes = data.data 

    return(
        <div className="mt-9">
            <h2 className="text-center text-2xl font-alice mb-5">Anime Appearance</h2>
            <SwiperProvider>
                {
                    animes.map((anime, index) => {
                        return(
                            <SwiperSlide key={index}>
                                <Anime 
                                    id = {anime.anime.mal_id || null}
                                    image = {anime.anime.images?.jpg?.image_url}
                                    title={anime.anime.title}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </SwiperProvider>
        </div>
    )
}