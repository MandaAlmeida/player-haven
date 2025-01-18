import { Game } from "@/@types/Games";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

export interface TransactionsContextType {
    topGames: Games[];
    games: Game[]
}

interface TransactionsProps {
    children: ReactNode;
}

type Games = {
    id: string;
    name: string;
    box_art_url: string;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export default function TransactionsProvider({ children }: TransactionsProps) {
    const [token, setToken] = useState<string | null>(null);
    const [games, setGames] = useState<Game[]>([]);
    const [topGames, setTopGames] = useState<Games[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [hasFetched, setHasFetched] = useState(false);

    const fetchToken = useCallback(async () => {
        try {
            const response = await fetch('/api/twitch-token', { method: 'POST' });
            if (!response.ok) {
                throw new Error(`Failed to fetch token: ${response.statusText}`);
            }
            const data = await response.json();
            if (data.access_token) {
                setToken(data.access_token);
            } else {
                throw new Error('Token de autenticação não encontrado');
            }
        } catch (err: any) {
            setError(err.message || 'Erro ao obter o token');
        }
    }, []);

    const fetchTopGames = useCallback(async () => {
        if (!token) return;
        try {
            const response = await fetch('/api/twitch-top-games', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch top games: ${response.statusText}`);
            }

            const data: Games[] = await response.json();
            console.log(data)
            const filteredGames = data.filter((game) => game.name.toLowerCase() !== 'just chatting' && game.name.toLowerCase() !== 'special events');
            setTopGames(filteredGames);
        } catch (err: any) {
            setError(err.message || 'Erro ao obter os jogos');
        }
    }, [token]);

    const fetchGames = useCallback(async () => {
        if (!token) return;

        try {
            const response = await fetch('/api/twitch-games', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            const data: Game[] = await response.json();
            const gamesWithoutCover = data.filter(game => game.cover?.image_id);
            console.log(gamesWithoutCover)
            setGames(gamesWithoutCover);


        } catch (err: any) {
            setError(err.message || 'Erro ao obter os jogos');
        }
    }, [token]);



    useEffect(() => {
        if (!token) {
            fetchToken();
        }
    }, [token]);



    useEffect(() => {
        if (!hasFetched && token) {
            fetchTopGames();
            fetchGames();
            setHasFetched(true);
        }
    }, [token, hasFetched]);


    return (
        <TransactionsContext.Provider
            value={{ topGames, games }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}
