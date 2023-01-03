import React from 'react'
import { getSession } from '@/lib/auth'

import AdminContainer from '@/containers/admin-container'

export default async function Admin() {
    const session = await getSession()
    return (
        <AdminContainer session={session} />
    )
}