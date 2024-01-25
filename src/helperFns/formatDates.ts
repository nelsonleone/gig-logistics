export function formatToWordsString(timestamp:string){
    if(timestamp && typeof timestamp === "string"){
        const date = new Date(timestamp)
        const options = { day: 'numeric' as 'numeric', month: 'long'as 'long', year: 'numeric' as 'numeric' }
        return new Intl.DateTimeFormat('en-US', options).format(date)
    }
    else {
        return "";
    }
}