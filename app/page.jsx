import HomeContainer from '@/containers/home-container'
import { getSession } from '@/lib/auth'


export default async function Home() {
  const session = await getSession()
  return <HomeContainer session={session} />
}
