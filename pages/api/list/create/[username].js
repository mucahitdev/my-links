import { db, getDoc, collection, doc, setDoc } from "@/lib/firebase"


export default async function handle(req, res) {
    const { query: { username }, body: session } = req

    const docRef = collection(db, "usernames")
    const docs = await getDoc(doc(docRef, username))

    if (docs.exists()) {
        res.status(400).json('Böyle bir kullanıcı var')
    }
    else {
        await setDoc(doc(docRef, username), {
            username: username,
            session: session,
            links: [],
            socials: []
        })
        await setDoc(doc(collection(db, "users"), session.user.bio), {
            username: username
        }, { merge: true })

        res.status(200).json(true)
    }
}