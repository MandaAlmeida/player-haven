"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


type LinkProps = {
    text: string,
    link: string,
}

export default function LinkHeader({ text, link }: LinkProps) {
    const pathname = usePathname();

    const isActive = pathname === link;
    return (
        <Link className={`text-sm font-bold  ${isActive ? "text-white underline" : "no-underline text-gray-300"}`} href={link}>{text}</Link>
    );
}
