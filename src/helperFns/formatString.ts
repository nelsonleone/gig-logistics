export function capitalizeString(inputString:String) {
    const trimmedString = inputString.trim()
    const firstLetter = trimmedString.charAt(0).toUpperCase()
    const rest = trimmedString.slice(1).toLowerCase()
    return `${firstLetter}${rest}`;
}