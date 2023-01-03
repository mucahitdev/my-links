import React from 'react'
import Link from 'next/link'

import LoggedOut from './logged-out'
import LoggedIn from './logged-in'

import styles from './header.module.scss'

export default function Header({ session }) {
    return (
        <header className={styles.header}>
            <Link href="/">
                <p className={styles.logo}>Links TR</p>
            </Link>
            {session ? <LoggedIn session={session} /> : <LoggedOut />}
        </header>
    )
}