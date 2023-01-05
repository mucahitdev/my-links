import styles from './not-found.module.scss'
import Link from 'next/link'

export default function NotFound() {
    return (
        <section className={styles.container}>

            <div className={styles.gif}>
                <h1 className={styles.text_404}>404</h1>
            </div>

            <div className={styles.content}>
                <p className={styles.messages}>Kullanıcı bulunamadı</p>

                <Link href="/" >
                    <p className={styles.link}>Anasayfaya dön</p>
                </Link>
            </div>

        </section>
    )
}