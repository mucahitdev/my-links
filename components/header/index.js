import React from 'react'

import LoggedOut from './logged-out'
import LoggedIn from './logged-in'

import styles from './header.module.scss'

export default function Header({ session }) {
    return (
        <header className={styles.header}>
            <p className={styles.logo}>Links TR</p>
            {session ? <LoggedIn session={session} /> : <LoggedOut />}
        </header>
    )
}