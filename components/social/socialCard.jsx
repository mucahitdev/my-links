import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { IoShareSocialOutline } from 'react-icons/io5'
import Link from 'next/link';
import styles from './social.module.css'

export default function SocialCard({ item }) {

    let icon = null;

    switch (item.title) {
        case 'Github':
            icon = <AiFillGithub className={styles.icon} />
            break;
        case 'Linkedin':
            icon = <AiFillLinkedin className={styles.icon} />
            break;
        case 'Instagram':
            icon = <AiFillInstagram className={styles.icon}/>
            break;
        case 'Twitter':
            icon = <AiOutlineTwitter className={styles.icon}/>
            break;
        default:
            icon = <IoShareSocialOutline className={styles.icon}/>
            break;
    }

    return (
        <Link href={item.url} target='_blank' className={styles.card}>
            <div className={styles.icons} >{icon}</div>
            <p className={styles.title}>
                {item.title}
            </p>
        </Link>
    )
}