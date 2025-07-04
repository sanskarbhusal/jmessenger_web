function removeSeconds(time: string): string {
    const arr = time.split(":")
    const meridiem = arr.pop()?.split(" ")[1] //AM or, PM
    const hhmm = arr.join(":")
    return hhmm + " " + meridiem
}
export { removeSeconds }