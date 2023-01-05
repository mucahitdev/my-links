import React from 'react'
import styles from './links.module.scss'
import Header from './core/header'
import Socials from './core/socials'

export default function LinksViewrsContainer({ data }) {
    return (
        <div className={styles.container}>
            <Header user={data.session.user} />
            <div className={styles.linksContainer}>
                Links
            </div>
            <Socials socials={data.socials} />
        </div>
    )
}