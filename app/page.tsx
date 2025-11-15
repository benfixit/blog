import Image from "next/image";
import { getBlogPosts } from "@/app/utils/file"
import { getNWords } from "./utils/string";
import styles from "@/app/ui/home.module.css";

export default function Home() {
  const posts = getBlogPosts();
  console.log("Home page >>> ", posts)
  return (
      <div className={styles.home_container}>
        <section className={styles.latest}>
          {posts.map((post) => {
            const { metadata: { title, thumbnail }, content, slug } = post;
            const description = getNWords(content, 25);
            return (
              <div className={styles.blog_post} key={slug}>
                <Image src={thumbnail} width={250} height={150} alt={title} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}...</p>
                  <a href={`/post/${slug}`}>Read article</a>
                </div>
              </div>
            );
          })}
        </section>
        <aside className={styles.popular}>
          <h3>Popular</h3>
          <div>
            {posts.map((post) => {
            const { metadata: { title, thumbnail }, slug } = post;

            return (
              <div className={styles.popular_post} key={slug}>
                <Image src={thumbnail} width={70} height={70} alt={title} />
                <a href={`/post/${slug}`}><h5>{title}</h5></a>
              </div>
            );
          })}
          </div>
        </aside>
      </div>
  );
}
