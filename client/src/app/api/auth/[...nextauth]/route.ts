import { AuthOptions } from "next-auth";
import { v4 as uuidv4 } from 'uuid';
import NextAuth from "next-auth/next";
// import jwt from "jsonwebtoken";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
    pages: { signIn: '/login' },
    callbacks: {
        async jwt({ token, user, isNewUser }) {
            console.log("is new user: ", isNewUser);
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.id = uuidv4();
            console.log("session: ", session);
            console.log("jwt token: ", token);
            return { ...session };
        }
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
            async profile({id, login: username, email, avatar_url: image }) {
                console.log("profile: ", { id, username, email, image });
                return { id, username, email, image };
            }
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials) {
                console.log("credentials: ", credentials);
                const user = await (await fetch("http://localhost:5000/log-in", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(credentials)
                })).json(); 

                if(user.id) return user;
                else return null;
            }
        })
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };