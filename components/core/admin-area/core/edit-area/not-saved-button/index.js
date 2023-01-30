'use client'
import React from 'react'
import { Button } from '@mui/material'
import styles from './not-saved-button.module.scss'

import { useSelector, useDispatch } from 'react-redux'
import { asyncUpdateUserData, resetSaveData } from '@/redux/user/userSlice'


export default function NotSavedButton() {
    const { user, notSaverUserData, notSaverUserDataLoading } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleSave = () => {
        dispatch(asyncUpdateUserData({ username: user.username, newData: notSaverUserData }))
    }

    const resetSave = () => {
        dispatch(resetSaveData())
    }

    if (user === notSaverUserData) return null
    return (
        <div className={styles.container}>
            <p>Kaydedilmemiş Değişiklikler Var</p>
            <div className={styles.buttons}>
                <Button variant="contained" color="error"
                    onClick={resetSave}
                    disabled={notSaverUserDataLoading}
                >
                    {notSaverUserDataLoading ? '. . .' : "Çöpe At"}
                </Button>

                <Button variant="contained" color="success"
                    onClick={handleSave}
                    disabled={notSaverUserDataLoading}
                >
                    {notSaverUserDataLoading ? '. . .' : "Kaydet"}
                </Button>
            </div>
        </div>
    )
}