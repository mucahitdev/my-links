'use client';
import React, { useState, useEffect } from 'react'
import styles from './admin.module.scss'

import CreateUserName from '@/components/core/create-username';

import { useDispatch, useSelector } from 'react-redux';
import { asyncGetUser } from '@/redux/user/userSlice'


export default function AdminContainer({ session }) {
    const { user } = useSelector(state => state.user)
    const [createUserNameIsVisible, setCreateUserNameIsVisible] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncGetUser(session.user.bio))
    }, [])

    useEffect(() => {
        if (user?.notUsername) {
            setCreateUserNameIsVisible(true)
        } else {
            setCreateUserNameIsVisible(false)
        }
    }, [user])


    if (!user) return <div className={styles.main}>Loading...</div>


    return (
        <main className={styles.main}>
            {
                createUserNameIsVisible ? <CreateUserName session={session} setCreateUserNameIsVisible={setCreateUserNameIsVisible} />
                    : <h1>Admin : {user?.username}</h1>
            }
        </main>
    )
}