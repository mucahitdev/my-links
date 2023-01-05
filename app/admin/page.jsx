import React from 'react'
import { getSession } from '@/lib/auth'

import Header from '@/components/core/header'
import AdminContainer from '@/containers/admin-container'

export default async function Admin() {
    const session = await getSession()
    return (
        <>
            <Header session={session} />
            <AdminContainer session={session} />
        </>
    )
}