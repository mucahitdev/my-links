import React from 'react'

const fetchData = async (id) => {
    const res = await fetch(`https://linkstr.vercel.app/api/list/get/${id}`)
    const data = await res.json()
    return data
}

export default async function UserLinksViewes({ params }) {
    const data = await fetchData(params.id)
    console.log(data)
    return (
        <div> {params.id} </div>
    )
}
