import React from 'react'
import styles from './links.module.scss'
import Header from './core/header'

export default function LinksViewrsContainer({ data }) {
    console.log(data)
    return (
        <div className={styles.container}>
            <Header user={data.session.user} />
            <div className={styles.linksContainer}>
                Links
            </div>
            <div className={styles.socialsContainer}>
                Socials
            </div>
        </div>
    )
}