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
                res.status(200).json({
                    notUser: false,
                    notUsername: false,
                    data: docsUser.data(),
                    message: 'Kullanıcı bilgileri başarıyla alındı',
                    error: null,
                })
            }
            else {
                res.status(200).json({
                    notUser: false,
                    notUsername: false,
                    data: null,
                    message: 'Kullanıcı adı almamış',
                    error: null,
                })
            }
        } else {
            res.status(200).json({
                notUser: false,
                notUsername: true,
                data: null,
                message: 'Kullanıcı adı almamış',
                error: null,
            })
        }
    } else {
        res.status(200).json({
            notUser: true,
            notUsername: false,
            data: null,
            message: null,
            error: 'Böyle bir kullanıcı yok'
        })
    }
}
