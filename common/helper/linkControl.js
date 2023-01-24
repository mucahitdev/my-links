export const linkControl = (link) => {
    if (link.link.includes("https://") || link.link.includes("http://")) {
        if (link.type == 0) {
            if (link.title.length > 2) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    }
    else {
        return false
    }
}