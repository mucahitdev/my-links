'use client';
import AddButton from '@/components/theme/add-button'
import styles from './edit-area.module.scss'
import SocialsArea from './socials-area'
import LinksArea from './links-area'
import NotSavedButton from './not-saved-button'
import CopyToClipboardButton from './copy-to-clipboard-button'

export default function EditArea({ user }) {

    console.log(user)
    return (
        <div className={styles.container}>
            <CopyToClipboardButton username={user.username} />
            <NotSavedButton />

            <SocialsArea data={user.socials} />
            <LinksArea data={user.links} />

            <AddButton />
        </div>
    )
}