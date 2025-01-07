import { ReactNode } from "react";
import Header from "@/components/header";
import { Footer } from "@/components/Footer";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}