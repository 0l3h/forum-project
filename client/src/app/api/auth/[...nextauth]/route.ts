import { AuthOptions } from "next-auth";
import { v4 as uuidv4 } from 'uuid';
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { signUp } from "../../../../api";

const authOptions: AuthOptions = {
    pages: { signIn: '/login' },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            const userSession = {...session, id:  uuidv4()}
            await signUp(userSession);
            return { ...userSession};
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