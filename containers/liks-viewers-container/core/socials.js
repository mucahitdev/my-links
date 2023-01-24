import React from 'react'
import styles from './socials.module.scss'
import SocialCard from './socialCard'

export default function Socials({ socials }) {
    return (
        <div className={styles.container}>
            <div className={styles.socials}>
                {
                    socials.map(social => {
                        return (
                            <SocialCard key={social.type} social={social} />
                        )
                    })
                }
            </div>
        </div>
    )
}