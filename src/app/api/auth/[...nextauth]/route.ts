import NextAuth from "next-auth/next";
import { type NextAuthOptions } from "next-auth";
import SpotifyProvider from 'next-auth/providers/spotify';

const options: NextAuthOptions = {
    providers: [
        SpotifyProvider({
            authorization:
                'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,playlist-modify-private,playlist-modify-public',
            clientId: (process.env.VERCEL_SPOTIFY_CLIENT_ID as string),
            clientSecret: (process.env.VERCEL_SPOTIFY_CLIENT_SECRET as string),
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if(account){
                token.access_token = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            return {
                ...session,
                token
            };
        },
    }
}


const handler = NextAuth(options);

export { handler as GET, handler as POST };
