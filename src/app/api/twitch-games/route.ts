import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
    console.log("Fetching games from IGDB...");
    const authorization = req.headers.get('Authorization');

    if (!authorization) {
        return NextResponse.json(
            { message: 'Authorization token is missing' },
            { status: 401 }
        );
    }

    const token = authorization.split(' ')[1];

    try {

        const data = await axios.post(
            'https://api.igdb.com/v4/games',
            " fields id, name, rating, total_rating, rating, cover.image_id, summary, age_ratings, genres.name, first_release_date; sort total_rating desc; sort first_release_date desc; where total_rating > 70 & rating_count > 250 & first_release_date >= 946684800;limit 500;",
            {
                headers: {
                    'Client-ID': process.env.TWITCH_CLIENT_ID as string,
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'text/plain',
                },
            }
        );
        console.log(data.data)

        return NextResponse.json(data.data);


    } catch (error: any) {
        console.error('Error fetching games:', error.response?.data || error.message || error);
        return NextResponse.json(
            { message: 'Error while fetching games', error: error.response?.data || error.message || error },
            { status: 500 }
        );
    }
}
