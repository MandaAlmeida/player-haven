import { ReactNode } from "react";
import "../globals.css";
import Header from "@/components/header";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}