import { SwiperSlide } from "swiper/react";
import SwiperProvider from "../components/SwiperProvider";

export default function AnimeImagesSkeleton() {
    return (
        <div className="mt-9 animate-pulse">
            <SwiperProvider>
                {Array.from({ length: 6 }).map((_, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-56.25 h-75 mx-auto bg-gray-300 rounded-md" />
                    </SwiperSlide>
                ))}
            </SwiperProvider>
        </div>
    );
}