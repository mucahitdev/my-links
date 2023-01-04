import { db, getDoc, collection, doc, setDoc } from "@/lib/firebase"


export default async function handle(req, res) {
    const { query: { username } } = req

    const docRef = collection(db, "usernames")
    const docs = await getDoc(doc(docRef, username))

    if (docs.exists()) {
        res.status(200).json(docs.data())
    } else {
        res.status(200).json(false)
    }
}