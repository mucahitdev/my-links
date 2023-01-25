import React from 'react'
import styles from './link.module.scss'
import Link from 'next/link'

export default function Linkc({ title, link }) {
    return (
        <Link href={link} className={styles.link} target='_blank' >
            {title}
        </Link>
    )
}