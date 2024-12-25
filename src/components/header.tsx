import Logo from "@/assets/PlayerHaven.png"

import Image from "next/image";
import LinkHeader from "./LinkHeader";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center bg-black px-16 h-20">
            <Link href={"/"}><Image src={Logo} alt="Logo da pagina" /></Link>
            <nav className="flex gap-5">
                <LinkHeader link={"/"} text="Inicio" />
                <LinkHeader link={"/games"} text="Jogos" />
                <LinkHeader link={"/booming"} text="Bombando" />
                <LinkHeader link={"/myGames"} text="Meus Jogos" />
                <LinkHeader link={"/about"} text="Sobre" />
            </nav>
            <ul>
                <li><input type="text" /></li>
                <li><button></button></li>
            </ul>
        </header>
    )
}