import React from 'react'
import AddButton from '@/components/theme/add-button'
import styles from './edit-area.module.scss'

export default function EditArea({ user }) {
    console.log(user)
    return (
        <div className={styles.container}>
            <h1>Link ve Sosyal medya hesaplarını ekle</h1>

            <div>
                link eklem
            </div>

            <div>
                sosyal medya ekleme alanı
            </div>

            <AddButton />

        </div>
    )
}