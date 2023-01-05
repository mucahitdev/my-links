import React from 'react'
import styles from './admin-area.module.scss'
import PreviewArea from './core/preview-area'

export default function AdminArea({ user }) {
    return (
        <div className={styles.container}>
            <div className={styles.editarea}>
                Sol alan
            </div>
            <div className={styles.previewarea}>
                <PreviewArea />
            </div>
        </div>
    )
}