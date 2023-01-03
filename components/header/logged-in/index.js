'use client';
import Image from 'next/image';
import Button from '@/components/theme/button';

import styles from './logged-in.module.scss';

import { signOut } from "next-auth/react"

export default function LoggedIn({ session }) {
    console.log('--->', session)
    return (
        <div className={styles.loggedIn}>
            <Button text="Sign Out" event={signOut} />
            <Image
                src={session.user.image}
                alt="User Image"
                width={40}
                height={40}
                className={styles.image}
            />
        </div>
    )
}