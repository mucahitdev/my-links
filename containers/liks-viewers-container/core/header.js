import React from 'react'
import styles from './header.module.scss'
import Image from 'next/image'

export default function Header({ user }) {
    return (
        <div className={styles.container}>
            <Image
                src={user.image}
                alt="Picture of the author"
                width={100}
                height={100}
                className={styles.avatar}
            />
            <h1 className={styles.title}>
                {user.name}
            </h1>
            {/* <p className={styles.description}>description</p> */}
        </div>
    )
}