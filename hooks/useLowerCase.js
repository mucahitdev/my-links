export const lowerCase = (str) => {
    const lowerCase = str.trim()
        .split(" ")
        .join("")
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, function (s) {
            var c = s.charCodeAt(0);
            switch (c) {
                case 231:
                    return "c";
                case 287:
                    return "g";
                case 305:
                    return "i";
                case 351:
                    return "s";
                case 252:
                    return "u";
                case 231:
                    return "c";
                case 246:
                    return "o";
                default:
                    return "";
            }
        });
    return lowerCase;
}
