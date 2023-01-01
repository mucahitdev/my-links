import React from 'react'
import styles from './social.module.css'

import SocialCard from './socialCard'


export default function Social({ socials }) {
    return (
        <div className={styles.social}>
            {
                socials.map((item, index) => {
                    return (
                        <SocialCard key={index} item={item} />
                    )
                })
            }
        </div>
    )
}