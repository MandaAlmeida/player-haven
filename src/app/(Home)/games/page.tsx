"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { Game } from "@/components/ListGames";
import Image from "next/image";

export default function Games() {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        axios("https://nlw-ignite-server.vercel.app/games").then((response) => {
            setGames(response.data);
        });
    }, []);

    return (
        <main className="p-[60px] ">
            <h1 className="text-[40px] text-gray-300 font-bold">Jogos</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7 gap-4 mt-11">
                {games.map((game) => (
                    <li key={game.id}><Image src={game.bannerUrl} alt="imagem dos jogos" width={230}
                        height={314} className="rounded-xl border-gray-800 border" /></li>
                ))}
            </ul>
        </main>
    );
}
