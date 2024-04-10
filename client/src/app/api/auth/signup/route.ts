import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
    try {
        const { username, email, password } = await req.json();

        console.log({ username, email, password });
        
        const user = await (await fetch("http://localhost:5000/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ username, email, password })
        })).json();

        console.log(user);
    } catch (error) {
        console.error(error);
    }

    return NextResponse.json({ message: 'success' });
}