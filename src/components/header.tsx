
"use client"
import Logo from "@/assets/PlayerHaven.png";
import User from "@/assets/User.png";
import { Search, Bell, ChevronDown } from 'lucide-react';
import { usePathname } from "next/navigation";

import Image from "next/image";
import LinkHeader from "./linkHeader";
import Link from "next/link";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className={`flex justify-between items-center  w-full ${pathname === "/" ? "bg-custom-gradient fixed top-0 z-50" : "bg-black"}  px-16 py-5 h-20`}>
            <Link href={"/"}><Image src={Logo} alt="Logo da pagina" className="w-28" /></Link>
            <nav className="flex gap-5">
                <LinkHeader link={"/"} text="Inicio" />
                <LinkHeader link={"/games"} text="Jogos" />
                <LinkHeader link={"/booming"} text="Bombando" />
                <LinkHeader link={"/myGames"} text="Meus Jogos" />
                <LinkHeader link={"/about"} text="Sobre" />
            </nav>
            <ul className="text-gray-300 flex items-center gap-5">
                <li className="flex items-center"><button><Search /></button></li>
                <li className="w-6 h-6"><button><Bell /></button></li>
                <li><button className="flex items-center gap-3"><Image src={User} alt="Foto do usuario" className="w-10 h-10" /><ChevronDown /></button></li>
            </ul>
        </header>
    )
}