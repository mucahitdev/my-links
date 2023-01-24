import { db, getDoc, collection, doc, setDoc } from "@/lib/firebase"
import { linkControl } from "@/common/helper/linkControl"


export default async function handle(req, res) {
    const { body: { newLink } } = req

    const { link, type, title, session } = newLink

    if (!linkControl(newLink)) {
        res.status(400).json('Link hatalı')
        return
    }

    const docRef = collection(db, "usernames")
    const docs = await getDoc(doc(docRef, session.username))


    if (docs.exists()) {

        if (type !== 0) {
            const socials = docs.data().socials
            let isExist = false
            socials.forEach((item) => {
                if (item.type == type) {
                    isExist = true
                }
            })

            if (isExist) {
                res.status(400).json('Bu link zaten var')
            } else {
                await setDoc(doc(docRef, session.username), {
                    socials: [...socials, { link, type }]
                }, { merge: true })
                res.status(200).json(true)
            }
        } else {
            const links = docs.data().links
            let isExist = false
            links.forEach((item) => {
                if (item.link === link || item.title === title) {
                    isExist = true
                }
            })

            if (isExist) {
                res.status(400).json('Aynı link veya Aynı title zaten var')
            } else {
                await setDoc(doc(docRef, session.username), {
                    links: [...links, { link, type, title }]
                }, { merge: true })
                res.status(200).json(true)
            }
        }
    }
}