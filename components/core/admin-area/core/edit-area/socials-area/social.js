'use client'
import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteSocial } from '@/redux/user/userSlice'


export default function Social({ data }) {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteSocial(data.type))
    }


    let title = null
    switch (data.type) {
        case 2:
            title = 'Twitter'
            break
        case 1:
            title = 'Instagram'
            break
        case 3:
            title = 'Linkedin'
            break
        case 4:
            title = 'Github'
            break
        default:
            title = 'Link'
            break
    }

    return (
        <>
            <p>{title}</p>
            <Button color='error' startIcon={<DeleteIcon />}
                onClick={handleDelete}
            >
                Sil
            </Button>
        </>
    )
}