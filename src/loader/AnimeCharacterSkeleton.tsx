import { SwiperSlide } from "swiper/react";
import SwiperProvider from "../components/SwiperProvider";

export default function AnimeCharactersSkeleton() {
    return (
        <div className="mt-9 animate-pulse">
            <h2 className="text-2xl font-alice text-center pb-5">
                <div className="h-7 w-40 bg-gray-300 rounded mx-auto" />
            </h2>

            <SwiperProvider>
                {Array.from({ length: 6 }).map((_, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-56.25 h-75 mx-auto relative">
                            
                            {/* Image skeleton */}
                            <div className="w-full h-full bg-gray-300 rounded-md" />

                            {/* Bottom overlay skeleton */}
                            <div className="absolute bottom-0 w-full px-2 py-2 bg-gray-400 rounded-br-md rounded-bl-md space-y-2">
                                
                                {/* Name + role */}
                                <div className="h-5 w-3/4 bg-gray-300 rounded" />
                                
                                {/* Button skeleton */}
                                <div className="h-8 w-24 bg-gray-300 rounded" />
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </SwiperProvider>
        </div>
    );
}