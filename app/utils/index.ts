import fs from "fs";
import path from "path";
import graymatter from "gray-matter";
import { PostMetadataType, PostType } from "@/typings";

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

export const getBlogPosts = (): Array<PostType> => {
    const contentPath = path.join(process.cwd(), "content");
    const files = fs.readdirSync(contentPath);

    return files.map(file => {
        const slug = path.basename(file, path.extname(file));

        const rawContent = fs.readFileSync(path.join(contentPath, file), 'utf-8');

        const { content, data } = graymatter(rawContent);
        const metadata = data as unknown as PostMetadataType;        

        return {
            slug,
            content,
            metadata
        }
    }).filter(post => post.metadata.published === true);
}

export const prevIndex = (index: number, min: number): number => {
    const newIndex = index - 1;

    if (newIndex < min) {
        return min;
    }

    return newIndex;
}

export const nextIndex = (index: number, max: number): number => {
    const newIndex = index + 1;

    if (newIndex > max) {
        return max;
    }

    return newIndex;
}