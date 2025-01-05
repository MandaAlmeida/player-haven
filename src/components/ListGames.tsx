"use client"
import { ChevronRight } from "lucide-react";
import LeagueofLegends from "@/assets/Lol.png";
import Fortnite from "@/assets/Fort.jpg";
import Dota from "@/assets/Dota.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import Image from 'next/image';
import { useRef } from "react";

export function ListGames() {
    const swiperRef = useRef<SwiperCore | null>(null);
    const items = [
        {
            image: Dota,
        },
        {
            image: LeagueofLegends,
        },
        {
            image: Fortnite,
        },
        {
            image: Dota,
        },
        {
            image: LeagueofLegends,
        },
        {
            image: Fortnite,
        },
        {
            image: Fortnite,
        },
        {
            image: Fortnite,
        },
    ]

    return (
        <div className="ml-16">
            <section className="text-gray-200 flex gap-5 items-center text-2xl font-bold mb-5">
                <span>Jogos Recomendados</span>
                <ChevronRight width={24} />
            </section>
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="listGames"
            >

                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <button className="w-[230px] h-[314px] rounded-xl"><Image src={item.image} alt="Imagem" className="w-full h-full rounded-xl" /></button>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    )
}