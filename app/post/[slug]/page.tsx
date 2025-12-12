import styles from "@/app/ui/page.module.css";
import { getBlogPosts, getMinutesRead } from "@/app/utils";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/content/${slug}.mdx`);  
  const posts = getBlogPosts();

  const postIndex = posts.findIndex(post => post.slug === slug);
  const prevIndex = Math.max(postIndex - 1, 0);
  const nextIndex = Math.min(postIndex + 1, posts.length - 1);

  const currentPost = posts[postIndex];
  const prevPost = posts[prevIndex].metadata.title;
  const nextPost = posts[nextIndex].metadata.title;

  return (
    <>
      <section className={styles.caption}>
        <div>
          <Image src={currentPost.metadata.thumbnail} alt={currentPost.metadata.title} fill />
        </div>
        <h1>{currentPost.metadata.title}</h1>
        <span>{new Date(currentPost.metadata.created).toDateString()} - {getMinutesRead(currentPost.content)}</span>
      </section>
      <section className={styles.wrapper}>
        <Post />
      </section>
      <section className={styles.controls}>
        {postIndex > 0 && <Link href={`${posts[prevIndex].slug}`}  style={{ marginRight: "auto" }}><FaArrowLeftLong />&nbsp;&nbsp;{prevPost}</Link>}
        {postIndex < posts.length - 1 && <Link href={`${posts[nextIndex].slug}`} style={{ marginLeft: "auto" }}>{nextPost}&nbsp;&nbsp;<FaArrowRightLong /></Link>}
      </section>
    </>
  );
}
 
export function generateStaticParams() {
  return [
    { slug: 'setting-up-babel-and-typescript' },
    { slug: 'laravel-model-binding' },
    { slug: 'two-pointer-technique' },
    { slug: 'video-tutorials-vs-documentation-vs-books' },
    { slug: 'dynamic-context-using-usestate-and-usecontext' }
  ]
}
 
export const dynamicParams = false