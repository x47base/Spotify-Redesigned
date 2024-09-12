'use client'
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

import SpotifyLoginButton from "@/components/auth/login";
import SpotifyLogoutButton from "@/components/auth/logout";

export default function Home() {
  const { data: session } = useSession();

  console.log(session);

  if (session) {
    return (
      <div className='App flex xl:flex-col h-[100vh] w-[100wh] justify-center items-center text-spotify-white'>
        <h1 className='text-3xl font-bold'>Welcome, <span className="text-spotify-green italic">{session?.user?.name}</span></h1>
        <SpotifyLogoutButton onClick={signOut} />
      </div>
    )
  } else {
    return (
      <div className="App flex h-[100vh] w-[100wh] justify-center items-center">
        <SpotifyLoginButton onClick={signIn} />
      </div>
    )
  }
}

