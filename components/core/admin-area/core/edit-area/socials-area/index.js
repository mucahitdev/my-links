import React from 'react'
import styles from './socials-area.module.scss'
import Social from './social'

export default function SocialsArea({ data }) {
    const socials = data?.map((social, index) => {
        return (
            <div className={styles.social} key={index}>
                <div className={styles.card}>
                    <Social data={social} />
                </div>
            </div>
        )
    })

    return (
        <div className={styles.container}>
            {socials}
        </div>
    )
}