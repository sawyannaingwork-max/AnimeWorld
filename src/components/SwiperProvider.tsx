import { useRef } from "react";
import { Swiper } from "swiper/react";
import type { ReactNode } from "react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import arrow from "./../assets/arrow.svg";


export default function SwiperProvider({ children }: { children: ReactNode }) {
  const prevRef = useRef<HTMLImageElement>(null);
  const nextRef = useRef<HTMLImageElement>(null);

  return (
    <div className="flex justify-between items-center w-[90%] mx-auto">
      
      <img
        ref={prevRef}
        src={arrow}
        alt="Prev"
        className="cursor-pointer mr-2"
      />

      <Swiper
        modules={[Pagination, Navigation, EffectCoverflow]}
        spaceBetween={20}
        effect="coverflow"
        centeredSlides
        loop
        pagination={{ clickable: true }}
        coverflowEffect={{
          depth: 200,
          stretch : 80,
          modifier: 1,
          rotate : 40,
          slideShadows: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper: SwiperType) => {
          setTimeout(() => {
            if (
              swiper.params?.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="w-[90%] h-100"
      >
        {children}
      </Swiper>

      <img
        ref={nextRef}
        src={arrow}
        alt="Next"
        className="rotate-180 cursor-pointer ml-2"
      />
    </div>
  );
}
