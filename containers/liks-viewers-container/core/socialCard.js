import React from 'react'
import { AiOutlineTwitter, AiFillInstagram, AiFillLinkedin, AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import styles from './social-card.module.scss'
import Link from 'next/link'

export default function SocialCard({ social }) {
    let icon = null
    switch (social.icon) {
        case 'twitter':
            icon = <AiOutlineTwitter className={styles.icon} />
            break
        case 'instagram':
            icon = <AiFillInstagram className={styles.icon} />
            break
        case 'linkedin':
            icon = <AiFillLinkedin className={styles.icon} />
            break
        case 'github':
            icon = <AiFillGithub className={styles.icon} />
            break
        default:
            icon = <AiOutlineLink className={styles.icon} />
            break
    }


    return (
        <div className={styles.socialCard}>
            <Link href={social.link} className={styles.link} target='_blank'>
                {icon}
            </Link>
            <div className={styles.title}>
                {social.title}
            </div>
        </div>

    )
}