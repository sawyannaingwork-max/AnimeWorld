import { SwiperSlide } from "swiper/react";
import SwiperProvider from "../components/SwiperProvider";

export default function AnimeRecommandSkeleton() {
    return (
        <div className="mt-9 animate-pulse">
            
            {/* Title */}
            <h2 className="text-center pb-5 font-alice text-2xl text-text">
                <div className="h-7 w-40 bg-gray-300 rounded mx-auto" />
            </h2>

            <SwiperProvider>
                {Array.from({ length: 6 }).map((_, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-56.25 h-75 mx-auto">
                            
                            {/* Image */}
                            <div className="w-full h-[85%] bg-gray-300 rounded-md" />
                            
                            {/* Title */}
                            <div className="mt-2 h-5 w-3/4 bg-gray-300 rounded mx-auto" />
                        </div>
                    </SwiperSlide>
                ))}
            </SwiperProvider>

        </div>
    );
}