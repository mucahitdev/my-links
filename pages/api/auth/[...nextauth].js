import NextAuth from "next-auth"

import GoogleProvider from "next-auth/providers/google"

import { FirestoreAdapter } from "@next-auth/firebase-adapter";

export const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,

    adapter: FirestoreAdapter({
        apiKey: process.env.FIREBASE_API_KEY,
        appId: process.env.FIREBASE_APP_ID,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    }),
    // pages: {
    //   signIn: "/login",
    // },
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user.bio = token.sub;
            }

            return session;
        },
        async jwt({ token, account, profile }) {
            if (account) {
                token.bio = profile.bio;
            }

            return token;
        },
    },
};

export default NextAuth(authOptions)