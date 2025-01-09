import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: Request) {
    const authorization = req.headers.get('Authorization');

    if (!authorization) {
        return NextResponse.json(
            { message: 'Authorization token is missing' },
            { status: 401 }
        );
    }

    const token = authorization.split(' ')[1];

    try {
        const { data } = await axios.get('https://api.twitch.tv/helix/games/top', {
            headers: {
                Authorization: `Bearer ${token}`,
                'Client-Id': process.env.TWITCH_CLIENT_ID as string,
            },
        });

        return NextResponse.json(data?.data);
    } catch (error: any) {
        console.error('Error fetching Twitch top games:', error.response?.data || error.message || error);
        return NextResponse.json(
            { message: 'Error while fetching top games', error: error.response?.data || error.message || error },
            { status: 500 }
        );
    }
}
