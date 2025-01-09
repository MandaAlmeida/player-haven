import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

export interface TransactionsContextType {
    topGames: Game[]
}

interface TransactionsProps {
    children: ReactNode;
}

type Game = {
    id: string;
    name: string;
    box_art_url: string;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export default function TransactionsProvider({ children }: TransactionsProps) {
    const [token, setToken] = useState<string | null>(null); // Token da Twitch
    const [topGames, setTopGames] = useState<Game[]>([]); // Lista de jogos
    const [error, setError] = useState<string | null>(null);

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
            const data = await response.json();
            console.log(data);
            setTopGames(data);
            fetchToken();
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
        if (token) {
            fetchTopGames();
        }
    }, [token]);


    return (
        <TransactionsContext.Provider
            value={{ topGames }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}
