"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { Game, ListGames } from "@/components/ListGames";
import Image from "next/image";

export default function Booming() {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        axios("https://nlw-ignite-server.vercel.app/games").then((response) => {
            setGames(response.data);
        });
    }, []);

    return (
        <main className="p-[60px] pr-0">
            <h1 className="text-[40px] text-gray-300 font-bold">Jogos</h1>
            <ul className="flex flex-col gap-10 mt-11">
                <li> <ListGames text="Top 10" /></li>
                <li><ListGames text="Top 10 - Ação" /></li>
                <li> <ListGames text="Top 10 - Mundo Aberto" /></li>
                <li> <ListGames text="Jogos Novos" /></li>
            </ul>
        </main>
    );
}
