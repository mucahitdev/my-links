import HomeContainer from '@/containers/home-container'
import { getSession } from '@/lib/auth'
import Header from '@/components/core/header'


export default async function Home() {
  const session = await getSession()
  return (
    <>
      <Header session={session} />
      <HomeContainer session={session} />
    </>
  )
}
