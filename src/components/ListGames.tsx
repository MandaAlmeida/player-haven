"use client"
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

type ListGamesType = {
    text: string
}


export interface Game {
    id: string;
    bannerUrl: string;
}

export function ListGames({ text }: ListGamesType) {
    const [games, setGames] = useState<Game[]>([]);


    useEffect(() => {
        axios("https://nlw-ignite-server.vercel.app/games").then((response) => {
            setGames(response.data);
        });
    }, []);


    return (
        <div>
            <section className="text-gray-200 flex gap-5 items-center text-2xl font-bold mb-5">
                <span>{text}</span>
                <ChevronRight width={24} />
            </section>
            <Swiper
                slidesPerView="auto"
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: "auto",
                        spaceBetween: 20,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="listGames p-0 m-0"
            >

                {games.map((game, index) => (
                    <SwiperSlide key={index}>
                        <button className="w-[230px] h-[314px] rounded-xl"><Image key={game.id}
                            src={game.bannerUrl}
                            alt="Imagem" className="rounded-xl border-gray-800 border" width={230}
                            height={314} /></button>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    )
}