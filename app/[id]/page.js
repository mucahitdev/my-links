import React from 'react'
import { notFound } from 'next/navigation';

import LinksViewrsContainer from '@/containers/liks-viewers-container'

const fetchData = async (id) => {
    const res = await fetch(`https://linkstr.vercel.app/api/list/get/${id}`, {
        next: {
            revalidate: 10,
        },
    })
    const data = await res.json()
    return data
}


export default async function UserLinksViewes({ params }) {
    const data = await fetchData(params.id)
    if (data === false) {
        return notFound(params)
    }
    return (
        <LinksViewrsContainer data={data} />
    )
}