import { SwiperSlide } from "swiper/react";
import SwiperProvider from "../components/SwiperProvider";
import useJikan from "../components/useJikan";
import type { CharacterPicResponse } from "../type";
import AnimeImagesSkeleton from "../loader/AnimeImageSkeleton";

export default function Images({id} : {id : string})
{
    // Fetching data
    const { data, isFetching, isError } = useJikan<CharacterPicResponse>(["Anime Character Pictures", id], `https://api.jikan.moe/v4/characters/${id}/pictures`)

    if (isFetching)
    {
        return <AnimeImagesSkeleton />
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later</p>
    }

    // Getting the images list 
    const images = data.data

    return(
        <div className="mt-9">
            <SwiperProvider>
            {
                images.map((img, index) => {
                    if (img.jpg?.image_url)
                    {
                        return(
                            <SwiperSlide key={index}>
                                <img  className="w-56.25 h-75 mx-auto object-cover rounded-md" src={img.jpg.image_url} alt="Image" />
                            </SwiperSlide>
                        )
                    }

                    return
                })
            }
        </SwiperProvider>
        </div>
    )
}