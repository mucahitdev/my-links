import React from 'react'
import AddButton from '@/components/theme/add-button'
import styles from './edit-area.module.scss'
import SocialsArea from './socials-area'
import LinksArea from './links-area'
import NotSavedButton from './not-saved-button'

export default function EditArea({ user }) {
    return (
        <div className={styles.container}>
            <NotSavedButton />

            <SocialsArea data={user.socials} />
            <LinksArea data={user.links} />

            <AddButton />
        </div>
    )
}