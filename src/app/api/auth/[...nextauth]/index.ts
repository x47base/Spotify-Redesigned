import NextAuth from "next-auth";

export default NextAuth({

    providers: [
    ],
    callbacks: {
    },
    secret: process.env.JWT_SECRET,
});