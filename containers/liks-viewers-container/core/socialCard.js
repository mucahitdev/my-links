import React from 'react'
import { AiOutlineTwitter, AiFillInstagram, AiFillLinkedin, AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import styles from './social-card.module.scss'
import Link from 'next/link'

export default function SocialCard({ social }) {
    let icon = null
    let title = null
    switch (social.type) {
        case 2:
            icon = <AiOutlineTwitter className={styles.icon} />
            title = 'Twitter'
            break
        case 1:
            icon = <AiFillInstagram className={styles.icon} />
            title = 'Instagram'
            break
        case 3:
            icon = <AiFillLinkedin className={styles.icon} />
            title = 'Linkedin'
            break
        case 4:
            icon = <AiFillGithub className={styles.icon} />
            title = 'Github'
            break
        default:
            icon = <AiOutlineLink className={styles.icon} />
            title = 'Link'
            break
    }


    return (
        <div className={styles.socialCard}>
            <Link href={social.link} className={styles.link} target='_blank'>
                {icon}
            </Link>
            <div className={styles.title}>
                {title}
            </div>
        </div>

    )
}