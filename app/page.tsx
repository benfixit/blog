import Image from "next/image";
import { getBlogPosts, getMinutesRead } from "@/app/utils";
import styles from "@/app/ui/home.module.css";

export default function Home() {
  const posts = getBlogPosts();

  return (
    <section className={styles.wrapper} suppressHydrationWarning={true}>
      {posts.map(post => {
        const { metadata: { title, thumbnail, description, created }, slug, content } = post;
        const date = new Date(created).toDateString()
        const minsRead = getMinutesRead(content);

        return (
          <a key={slug} href={`post/${slug}`}>
            <span>
              <Image src={thumbnail} alt={title} fill />
            </span>
            <span>{title}</span>
            <span>{date} - {minsRead}</span>
            <span>{description}</span>
          </a>
        );
          
      })}
    </section>
  );
}
