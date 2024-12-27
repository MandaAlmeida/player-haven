
"use client"
import Logo from "@/assets/PlayerHaven.png";
import User from "@/assets/User.png";
import { Search, Bell, ChevronDown } from 'lucide-react';
import { usePathname } from "next/navigation";

import Image from "next/image";
import LinkHeader from "./LinkHeader";
import Link from "next/link";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className={`tw-flex tw-justify-between tw-items-center tw-fixed tw-top-0 tw-z-50 tw-w-full ${pathname === "/" ? "tw-bg-custom-gradient" : "tw-bg-transparent"}  tw-px-16 tw-h-20`}>
            <Link href={"/"}><Image src={Logo} alt="Logo da pagina" /></Link>
            <nav className="tw-flex tw-gap-5">
                <LinkHeader link={"/"} text="Inicio" />
                <LinkHeader link={"/games"} text="Jogos" />
                <LinkHeader link={"/booming"} text="Bombando" />
                <LinkHeader link={"/myGames"} text="Meus Jogos" />
                <LinkHeader link={"/about"} text="Sobre" />
            </nav>
            <ul className="tw-text-gray-300 tw-flex tw-items-center tw-gap-5">
                <li className="tw-flex tw-items-center"><button><Search /></button></li>
                <li className="tw-w-6 tw-h-6"><button><Bell /></button></li>
                <li><button className="tw-flex tw-items-center tw-gap-3"><Image src={User} alt="Foto do usuario" className="tw-w-10 tw-h-10" /><ChevronDown /></button></li>
            </ul>
        </header>
    )
}