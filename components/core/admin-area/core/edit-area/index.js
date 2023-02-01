'use client';
import React from 'react'
import AddButton from '@/components/theme/add-button'
import styles from './edit-area.module.scss'
import SocialsArea from './socials-area'
import LinksArea from './links-area'
import NotSavedButton from './not-saved-button'

export default function EditArea({ user }) {
    // get display width

    const [widths, setWidths] = React.useState(0);
    React.useEffect(() => {
        setWidths(window.innerWidth);
    }, []);

    return (
        <div className={styles.container} style={{
            width: `${widths}px`
        }}>
            <NotSavedButton />

            <SocialsArea data={user.socials} />
            <LinksArea data={user.links} />

            <AddButton />
        </div>
    )
}