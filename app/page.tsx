import Image from "next/image";
import { getBlogPosts } from "@/app/utils/file"
import { getMinutesRead } from "./utils/string";
import styles from "@/app/ui/home.module.css";

export default function Home() {
  const posts = getBlogPosts();

  return (
    <section className={styles.wrapper}>
      {posts.map(post => {
        const { metadata: { title, thumbnail, description, created }, slug, content } = post;
        const date = new Date(created).toDateString()
        const minsRead = getMinutesRead(content);

        return (
          <div key={slug}>
            <div>
              <Image src={thumbnail} alt={title} fill />
            </div>
            <h3><a href={`post/${slug}`}>{title}</a></h3>
            <span>{date} - {minsRead}</span>
            <p>{description}</p>
          </div>
        );
          
      })}
    </section>
  );
}
