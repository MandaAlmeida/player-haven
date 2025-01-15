import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST() {
    try {
        const { data } = await axios.post('https://id.twitch.tv/oauth2/token', {
            client_id: process.env.TWITCH_CLIENT_ID,
            client_secret: process.env.TWITCH_CLIENT_SECRET,
            grant_type: 'client_credentials',
        });

        console.log('Twitch token obtained:', data.access_token);

        return NextResponse.json({ access_token: data.access_token });
    } catch (error: any) {
        console.error('Error fetching Twitch token:', error.response?.data || error.message || error);
        return NextResponse.json(
            { message: 'Error while trying to get Twitch token', error: error.response?.data || error.message || error },
            { status: 500 }
        );
    }
}
