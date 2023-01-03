'use client';
import Button from '@/components/theme/button';

import { signIn } from 'next-auth/react'
export default function LoggedOut() {
    return (
        <Button text="Sign In" event={signIn} />
    )
}