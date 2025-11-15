import fs from "fs";
import path from "path";
import graymatter from "gray-matter";

export const getBlogPosts = () => {
    const contentPath = path.join(process.cwd(), "content");
    const files = fs.readdirSync(contentPath);

    return files.map(file => {
        const slug = path.basename(file, path.extname(file));

        const rawContent = fs.readFileSync(path.join(contentPath, file), 'utf-8');

        const { content, data } = graymatter(rawContent);
        

        return {
            slug,
            content,
            metadata: data
        }
    });
}