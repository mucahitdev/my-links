'use client'
import React from 'react'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { asyncUpdateUserData } from '@/redux/user/userSlice'


export default function NotSavedButton() {
    const { user, notSaverUserData } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleSave = () => {
        dispatch(asyncUpdateUserData({ username: user.username, newData: notSaverUserData }))
    }

    if (user === notSaverUserData) return null
    return (
        <div>
            <p>Kaydedilmemiş Değişiklikler Var</p>
            <Button variant="contained" color="error">
                Çöpe At
            </Button>

            <Button variant="contained" color="success"
                onClick={handleSave}
            >
                Kaydet
            </Button>
        </div>
    )
}