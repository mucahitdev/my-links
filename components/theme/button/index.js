import React from 'react'
import styles from './button.module.scss'

export default function Button({ text, event }) {

    const handleClick = () => {
        if (event) {
            event()
        }
    }

    return (
        <button className={styles.button} onClick={handleClick}>{text}</button>
    )
}