import styles from './home.module.scss'

export default function HomeContainer({ session }) {
  console.log('user ---->', session)
  const user = session?.user;
  return (
    <main className={styles.main}>
      {
        user ? (
          <div>
            <h1>Hoşgeldin {user.name}</h1>
          </div>
        ) : (
          <div>
            <h1>Hoşgeldin misafir</h1>
          </div>
        )
      }
    </main>
  )
}