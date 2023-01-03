'use client'
import React from 'react'
import styles from './admin.module.scss'
import { useSelector } from 'react-redux'

export default function AdminContainer({ session }) {

    const { user } = useSelector(state => state.user)
    console.log('admin redux ---->', user)
    // console.log('admin user ---->', session)
    return (
        <main className={styles.main}>AdminContainer</main>
    )
}