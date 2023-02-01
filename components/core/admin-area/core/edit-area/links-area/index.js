'use client';
import React, { useState } from 'react'
import styles from './links-area.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { deleteLink } from '@/redux/user/userSlice';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


import Link from 'next/link';

export default function LinksArea() {
    const dispatch = useDispatch();

    const { notSaverUserData } = useSelector(state => state.user)

    const handleDelete = (uuid) => {
        dispatch(deleteLink(uuid))
    }


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Links</h1>
            <ul className={styles.links}>
                {notSaverUserData.links.map(link => (
                    <li className={styles.link} key={link.uuid}>
                        {link.title}
                        <Button color='error' startIcon={<DeleteIcon />}
                            onClick={() => handleDelete(link.uuid)}
                        >
                            Sil
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}