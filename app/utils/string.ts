const AVERAGE_WORDS_PER_MINUTE = 250;

export const getNWords = (words: string, N: number): string => {
    return words.split(" ").slice(0, N).join(" ");
}

export const getMinutesRead = (words: string): string => {
    const minsRead = Math.round(words.split(" ").length / AVERAGE_WORDS_PER_MINUTE);

    if (minsRead < 2) {
        return `${minsRead} min read`;
    }

    return `${minsRead} mins read`;
}