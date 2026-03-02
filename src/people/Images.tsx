import { SwiperSlide } from "swiper/react";
import SwiperProvider from "../components/SwiperProvider";
import useJikan from "../components/useJikan";
import type { PersonImageResponse } from "../type";

export default function Images({id} : {id : string})
{
    // Fetching Data
    const { data, isFetching, isError } = useJikan<PersonImageResponse>(["Person Pictures", id], `https://api.jikan.moe/v4/people/${id}/pictures`)

    if (isFetching)
    {
        return <p>Loading....</p>
    }

    if (isError || !data)
    {
        return <p>Something went wrong. Try again later.</p>
    }

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
                                    <img className="w-56.25 h-75 mx-auto object-cover rounded-md" src={img.jpg.image_url} alt="Images" />
                                </SwiperSlide>
                            )
                        }
                    })
                }
            </SwiperProvider>
        </div>
    )
}