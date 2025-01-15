"use client"
import { ReactNode } from "react";
import TransactionsProvider from "@/contexts/TransactionsContext";

import Header from "@/components/header";
import { Footer } from "@/components/footer";


export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <TransactionsProvider>{children}</TransactionsProvider>
      <Footer />
    </div>
  )
}