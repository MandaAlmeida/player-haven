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
        <Link className={`tw-text-sm tw-font-bold  ${isActive ? "tw-text-white tw-underline" : "tw-no-underline tw-text-gray-300"}`} href={link}>{text}</Link>
    );
}
