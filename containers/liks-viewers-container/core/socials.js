import React from 'react'
import styles from './socials.module.scss'
import SocialCard from './socialCard'

const mockSocials = [
    {
        id: 2,
        title: 'Twitter',
        link: 'https://www.twitter.com',
        icon: 'twitter'
    },
    {
        id: 3,
        title: 'Instagram',
        link: 'https://www.instagram.com',
        icon: 'instagram'
    },
    {
        id: 4,
        title: 'Linkedin',
        link: 'https://www.linkedin.com',
        icon: 'linkedin'
    },
    {
        id: 5,
        title: 'Github',
        link: 'https://www.github.com',
        icon: 'github'
    }
]

export default function Socials() {
    const socials = mockSocials

    return (
        <div className={styles.container}>
            <div className={styles.socials}>
                {
                    socials.map(social => {
                        return (
                            <SocialCard key={social.id} social={social} />
                        )
                    })
                }
            </div>
        </div>
    )
}