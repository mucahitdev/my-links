import React from 'react'
import styles from './links.module.scss'
import Header from './core/header'
import Socials from './core/socials'
import Linkc from './core/link'

export default function LinksViewrsContainer({ data }) {
    const isSocialsEmpty = Object.keys(data.socials).length === 0
    return (
        <div className={styles.container}>
            <Header user={data.session.user} />
            <div className={styles.linksContainer}>
                {
                    data.links.map((link, i) => {
                        return (
                            <Linkc key={i} {...link} />
                        )
                    })
                }
            </div>

            {
                !isSocialsEmpty && <Socials socials={data.socials} />
            }
        </div>
    )
}