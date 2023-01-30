import { db, doc, setDoc } from "@/lib/firebase"

export default async function handle(req, res) {
    const { body: { username, newData } } = req

    const links = newData.links
    const socials = newData.socials

    const userRef = doc(db, "usernames", username)

    try {
        await setDoc(userRef, {
            links,
            socials
        }, { merge: true })

        res.status(200).json({ message: "success" })
    } catch (error) {
        res.status(500).json({ message: "error" })
    }
} 