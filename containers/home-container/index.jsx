'use client'
import React from 'react'
import styles from './home.module.scss'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function HomeContainer() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <main className={styles.main}>
      {
        session ? (
          <div>
            <h1>Hoşgeldin {session.user.name}</h1>
            <button onClick={() => signOut()}>Çıkış yap</button>
          </div>
        ) : (
          <div>
            <h1>Hoşgeldin misafir</h1>
            <button onClick={() => signIn('google')}>Google ile giriş yap</button>
          </div>
        )
      }
    </main>
  )
}