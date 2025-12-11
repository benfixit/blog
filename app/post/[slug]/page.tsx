import styles from "@/app/ui/page.module.css";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/content/${slug}.mdx`); 

  return (
    <main className={styles.page}>
      <Post />
    </main>
  );
}
 
export function generateStaticParams() {
  return [
    { slug: 'setting-up-babel-and-typescript' },
    { slug: 'laravel-model-binding' },
    { slug: 'two-pointer-technique' }
  ]
}
 
export const dynamicParams = false