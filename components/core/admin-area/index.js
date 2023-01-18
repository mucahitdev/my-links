import React from 'react'
import styles from './admin-area.module.scss'
import PreviewArea from './core/preview-area'
import EditArea from './core/edit-area'

export default function AdminArea({ user }) {
    return (
        <div className={styles.container}>
            <div className={styles.editarea}>
                <EditArea user={user} />
            </div>
            <div className={styles.previewarea}>
                <PreviewArea user={user} />
            </div>
        </div>
    )
}