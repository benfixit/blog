export const getNWords = (words: string, N: number): string => {
    return words.split(" ").slice(0, N).join(" ");
}