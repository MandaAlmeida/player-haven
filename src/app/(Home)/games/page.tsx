"use client"
import Image from "next/image";
import { TransactionsContext } from '@/contexts/TransactionsContext';
import { useContextSelector } from 'use-context-selector';

export default function Games() {

    const games = useContextSelector(TransactionsContext,
        (context) => context.games
    );

    return (
        <main className="p-[60px] ">
            <h1 className="text-[40px] text-gray-300 font-bold">Jogos</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7 gap-4 mt-11">
                {games.map((game) => (
                    <li key={game.id}><Image src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover?.image_id}.webp`} alt="imagem dos jogos" width={230}
                        height={314} className="rounded-xl border-gray-800 border" /></li>
                ))}
            </ul>
        </main>
    );
}
