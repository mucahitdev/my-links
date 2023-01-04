'use client';
import React, { useState, useEffect } from 'react'
import Button from '@/components/theme/button'
import styles from './create-username.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useLowerCase } from '@/hooks/useLowerCase';

import { asyncQueryUserName, asyncCreateUserLink } from '@/redux/user/userSlice'



export default function CreateUserName({ session, setCreateUserNameIsVisible }) {
    const [handleChangeUsername, setHandleChangeUsername] = useState('')
    const [username, setUsername] = useState('')
    const [buttonText, setButtonText] = useState('Kendine bir username bul...')
    const [saveButtonText, setSaveButtonText] = useState('Kaydet')

    const { queryUserNameTaken, queryUserNameLoading, createUserLinkLoading, user } = useSelector(state => state.user)

    const saveUserName = () => {
        dispatch(asyncCreateUserLink({ username, session }))

    }

    useEffect(() => {
        if (queryUserNameLoading === 'pending') {
            setButtonText('Kontrol ediliyor...')
        } else if (queryUserNameLoading === 'succeeded') {
            if (queryUserNameTaken) {
                setButtonText('Bu username kullanımda')
            } else {
                setButtonText('Bu username kullanılabilir')
            }
        }
    }, [queryUserNameTaken, queryUserNameLoading])

    const dispatch = useDispatch();

    const handleClick = () => {
        if (handleChangeUsername.trim().length > 2) {
            setUsername(handleChangeUsername)
            dispatch(asyncQueryUserName(handleChangeUsername))
        } else {
            alert('Username en az 3 karakter olmalı')
        }
    }

    function handleChange(e) {
        setHandleChangeUsername(useLowerCase(e.target.value))
    }

    useEffect(() => {
        if (createUserLinkLoading) {
            setSaveButtonText('Kaydediliyor...')
            window.location.reload()
        } else {
            setSaveButtonText('Kaydet')
        }

    }, [createUserLinkLoading])

    const saveButtonVisibility = queryUserNameTaken === false && handleChangeUsername === username && queryUserNameLoading !== 'pending'

    return (
        <div className={styles.container}>
            <input value={handleChangeUsername} placeholder='Username gir...' className={styles.input} type="text" onChange={handleChange} />
            <Button text={buttonText} event={handleClick} />
            {
                saveButtonVisibility && <Button text={saveButtonText} event={saveUserName} />
            }
        </div>
    )
}