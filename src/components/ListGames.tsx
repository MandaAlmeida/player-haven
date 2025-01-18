"use client"
import { ChevronRight } from "lucide-react";
import { TransactionsContext } from '@/contexts/TransactionsContext';
import { useContextSelector } from 'use-context-selector';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { formatBoxArtUrl } from "@/utils/formatBoxArtUrl";

type ListGamesType = {
    text: string
}


export interface Game {
    id: string;
    bannerUrl: string;
}

export function ListGames({ text }: ListGamesType) {
    const gamesTop = useContextSelector(TransactionsContext,
        (context) => context.topGames
    );

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

                {gamesTop.map((game, index) => (
                    <SwiperSlide key={index}>
                        <button className="w-[230px] h-[314px] rounded-xl"><Image key={game.id}
                            src={formatBoxArtUrl(game.box_art_url, 230, 314)}
                            alt="Imagem" className="rounded-xl border-gray-800 border" width={230}
                            height={314} /></button>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    )
}