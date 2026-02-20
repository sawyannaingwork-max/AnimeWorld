import { SwiperSlide } from "swiper/react";
import SwiperProvider from "../components/SwiperProvider";
import useJikan from "../components/useJikan";
import type { AnimeImageResponse } from "../type";

export default function Images({id} : {id : string})
{
    // FEtching data
    const { data, isFetching, isError } = useJikan<AnimeImageResponse>(["Anime Images", id],`https://api.jikan.moe/v4/anime/${id}/pictures`)

    if (isFetching)
    {
        return <p>Loading..</p>
    }

    if(isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    const images = data.data 

    if (images.length === 0)
    {
        return
    }

    return(
        <div className="mt-9">
            <SwiperProvider>
            {
                images.map((img, index) => {
                    if (img.jpg?.image_url)
                    {
                        return(
                            <SwiperSlide key={index}>
                                <img className="mx-auto rounded-md" src={img.jpg.image_url} alt="Images" />
                            </SwiperSlide>
                        )
                    }
                })
            }
        </SwiperProvider>
        </div>
    )
}