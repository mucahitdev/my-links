import { db, getDoc, collection, doc } from "@/lib/firebase"

export default async function handle(req, res) {
    const { query: { id } } = req
    const username = id

    // username is the id of the document in the collection
    const docRef = collection(db, "usernames")
    const docs = await getDoc(doc(docRef, username))

    if (docs.exists()) {
        res.status(200).json(true)
    }
    else {
        res.status(200).json(false)
    }
}
