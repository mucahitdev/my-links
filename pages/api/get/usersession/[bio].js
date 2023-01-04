import { db, getDoc, collection, doc } from "@/lib/firebase"

export default async function handle(req, res) {
    const { query: { bio } } = req

    const docRef = collection(db, "users")
    const docs = await getDoc(doc(docRef, bio))

    if (docs.exists()) {
        const usernames = docs.data().username

        if (usernames) {
            const docRefUser = collection(db, "usernames")
            const docsUser = await getDoc(doc(docRefUser, usernames))

            if (docsUser.exists()) {
                res.status(200).json(docsUser.data())
            }
            else {
                res.status(200).json('Username daha bulunamadı')
            }
        } else {
            res.status(200).json({
                notUsername: true
            })
        }
    } else {
        res.status(200).json('Böyle bir kullanıcı yok')
    }

}
