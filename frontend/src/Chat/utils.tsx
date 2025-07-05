//removes seconds from the localeTimeString
function removeSeconds(time: string): string {
    const arr = time.split(":")
    const meridiem = arr.pop()?.split(" ")[1] //AM or, PM
    const hhmm = arr.join(":")
    return hhmm + " " + meridiem
}
//extract weekday, day of month and month from the utc string
function getDate(string: string) {
    const arr = string.split(" ")
    const date = arr.slice(0, 3).join(" ")
    return date
}
export { removeSeconds as getTime, getDate }