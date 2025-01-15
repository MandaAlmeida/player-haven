import { Carrossel } from "@/components/carrossel";
import { ListGames } from "@/components/listGames";

export default function Home() {

  return (
    <main>
      <Carrossel />
      <section className="flex flex-col gap-10 ml-16">
        <ListGames text="Jogos Recomendados" />
        <ListGames text="Ação" />
        <ListGames text="Mundo Aberto" />
      </section>

    </main>
  );
}
