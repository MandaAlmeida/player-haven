'use client'
import LeagueofLegends from "@/assets/LeagueofLegends.jpg";
import Fortnite from "@/assets/fortnite.jpg";
import CallofDuty from "@/assets/CallofDuty.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination, EffectCreative } from 'swiper/modules';
import Image from 'next/image';
import Link from "next/link";

export function Carrossel() {
    const items = [
        {
            image: CallofDuty,
            title: "Call of Duty",
            text: "Jogo de estratégia em que duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória."
        },
        {
            image: LeagueofLegends,
            title: "League of Legends",
            text: "Jogo de estratégia em que duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória."
        },
        {
            image: Fortnite,
            title: "Fortnite",
            text: "Jogo de estratégia em que duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória."
        },
    ]


    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }}
            modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        >
            {items.map((item, index) => (
                <SwiperSlide key={index} className="bg-black">
                    <Image src={item.image} alt="Imagem" className="opacity-50 h-[100vh] max-h-[900px] object-cover" />
                    <section className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center gap-10 flex-col items-center text-gray-200 text-center">
                        <h3 className="text-[50px] font-bold">{item.title}</h3>
                        <p className="text-lg max-w-4xl">{item.text}</p>
                        <Link href={"#"} className="text-xl hover:text-white underline">Saiba mais</Link>
                    </section>
                </SwiperSlide>
            ))}
            <div className="absolute bg-custom-gradient-bottom w-full h-[100px] bottom-0 z-50"></div>
        </Swiper>
    );
}