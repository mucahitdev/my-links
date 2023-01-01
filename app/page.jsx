import styles from './page.module.css'
import data from '@/data/user.json'
import Link from 'next/link'

import Social from '@/components/social'

export default function Home() {

  const { theme, user, other, socials } = data
  const { title, subtitle, avatar } = user

  let bgColor = theme.background.color
  let textColor = theme.text.color

  return (
    <main className={styles.main} style={{
      backgroundColor: bgColor,
      color: textColor
    }}>
      <div className={styles.header}>
        <img className={styles.avatar} src={avatar.url} alt={title.text} />
        <p className={styles.title}>
          {title.text}
        </p>
        <p className={styles.subtitle}>
          {subtitle.text}
        </p>
      </div>

      <div className={styles.contents}>
        {
          other.map((item, index) => {
            return (
              <Link className={styles.content} key={index} href={item.url} target='_blank' style={{
                borderColor: item.color
              }}>
                <p className={styles.contentText} >
                  {item.title}
                </p>
              </Link>
            )
          })
        }
      </div>
      <div className={styles.footer}>
        <Social socials={socials} />
      </div>
    </main>
  )
}