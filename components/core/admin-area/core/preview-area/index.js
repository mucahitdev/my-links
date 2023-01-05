'use client';
import React, { useState } from 'react'
import styles from './preview-area.module.scss'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export default function PreviewArea({ user }) {
    const [preview, setPreview] = useState(true)
    const url = `/${user.username}`
    return (
        <div className={styles.container}>
            <div className={styles.preview}>
                <iframe src={url} className={styles.iframe} width='100%' height='100%' />
            </div>
            <div className={`${styles.preview_absolute} ${preview && styles.active}`}>
                <iframe src={url} className={styles.iframe} width='100%' height='100%' />
            </div>
            <div className={styles.button}>
                {preview ? (
                    <AiFillEyeInvisible className={styles.icon} onClick={() => setPreview(false)} />
                ) : (
                    <AiFillEye className={styles.icon} onClick={() => setPreview(true)} />
                )}
            </div>
        </div>
    )
}