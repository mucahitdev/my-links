import React from 'react'
import styles from './button.module.scss'

export default function Button({ text, event }) {
    return (
        <button className={styles.button} onClick={() => event()}>{text}</button>
    )
}