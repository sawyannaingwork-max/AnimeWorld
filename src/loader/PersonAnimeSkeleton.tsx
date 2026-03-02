import { SwiperSlide } from "swiper/react";
import SwiperProvider from "../components/SwiperProvider";

export default function PersonAnimeSkeleton() {
    return (
        <div className="mt-9 animate-pulse">
            
            {/* Title */}
            <h2 className="text-center text-2xl font-alice mb-5">
                <div className="h-7 w-52 bg-gray-300 rounded mx-auto" />
            </h2>

            <SwiperProvider>
                {Array.from({ length: 5 }).map((_, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-56.25 mx-auto">
                            
                            {/* Image */}
                            <div className="w-full h-75 bg-gray-300 rounded-md" />
                            
                            {/* Title */}
                            <div className="mt-2 h-5 w-3/4 bg-gray-300 rounded mx-auto" />

                        </div>
                    </SwiperSlide>
                ))}
            </SwiperProvider>

        </div>
    )
}