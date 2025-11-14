import Image from "next/image";
import styles from "@/app/ui/home.module.css";

export default function Home() {
  return (
      <>
        <section className={styles.latest}>
          <h2>Latest</h2>
          <div>
            <Image src="/babel_typescript.webp" width={400} height={300} alt="Latest blog post" />
            <div>
              <span>Date</span>
              <h2>Setting up Babel and Typescript</h2>
              <p>Typescript has it's own compiler but there are times when you might want to use a different compiler due to personal preference or project requirements. In this article, we will learn how to use a compiler like Babel to compile our Typescript file to Javascript so that our code can run on any browser whilst the function of the Typescript compiler `tsc` will be limited to type checking our code.</p>
              <a href="">Read article</a>
            </div>
        </div>
        </section>
        <section className={styles.trending}>
          <h2>Trending</h2>
          <div>
            <div>
              <Image src="/babel_typescript.webp" width={300} height={300} alt="Latest blog post" />
              <div>
                <span>Date</span>
                <h2>Setting up Babel and Typescript</h2>
                <p>Typescript has it's own compiler but there are times when you might want to use a different compiler due to personal preference or project requirements. In this article, we will learn how to use a compiler like Babel to compile our Typescript file to Javascript so that our code can run on any browser whilst the function of the Typescript compiler `tsc` will be limited to type checking our code.</p>
                <a href="">Read article</a>
              </div>
            </div>
            <div>
              <Image src="/babel_typescript.webp" width={300} height={300} alt="Latest blog post" />
              <div>
                <span>Date</span>
                <h2>Setting up Babel and Typescript</h2>
                <p>Typescript has it's own compiler but there are times when you might want to use a different compiler due to personal preference or project requirements. In this article, we will learn how to use a compiler like Babel to compile our Typescript file to Javascript so that our code can run on any browser whilst the function of the Typescript compiler `tsc` will be limited to type checking our code.</p>
                <a href="">Read article</a>
              </div>
            </div>
            <div>
              <Image src="/babel_typescript.webp" width={300} height={300} alt="Latest blog post" />
              <div>
                <span>Date</span>
                <h2>Setting up Babel and Typescript</h2>
                <p>Typescript has it's own compiler but there are times when you might want to use a different compiler due to personal preference or project requirements. In this article, we will learn how to use a compiler like Babel to compile our Typescript file to Javascript so that our code can run on any browser whilst the function of the Typescript compiler `tsc` will be limited to type checking our code.</p>
                <a href="">Read article</a>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.popular}>
          <h2>Popular</h2>
          <div>
            <div>
              <Image src="/babel_typescript.webp" width={350} height={350} alt="Latest blog post" />
              <div>
                <span>Date</span>
                <h2>Setting up Babel and Typescript</h2>
                <p>Typescript has it's own compiler but there are times when you might want to use a different compiler due to personal preference or project requirements. In this article, we will learn how to use a compiler like Babel to compile our Typescript file to Javascript so that our code can run on any browser whilst the function of the Typescript compiler `tsc` will be limited to type checking our code.</p>
                <a href="">Read article</a>
              </div>
            </div>
            <div>
              <Image src="/babel_typescript.webp" width={350} height={350} alt="Latest blog post" />
              <div>
                <span>Date</span>
                <h2>Setting up Babel and Typescript</h2>
                <p>Typescript has it's own compiler but there are times when you might want to use a different compiler due to personal preference or project requirements. In this article, we will learn how to use a compiler like Babel to compile our Typescript file to Javascript so that our code can run on any browser whilst the function of the Typescript compiler `tsc` will be limited to type checking our code.</p>
                <a href="">Read article</a>
              </div>
            </div>
            <div>
              <Image src="/babel_typescript.webp" width={350} height={350} alt="Latest blog post" />
              <div>
                <span>Date</span>
                <h2>Setting up Babel and Typescript</h2>
                <p>Typescript has it's own compiler but there are times when you might want to use a different compiler due to personal preference or project requirements. In this article, we will learn how to use a compiler like Babel to compile our Typescript file to Javascript so that our code can run on any browser whilst the function of the Typescript compiler `tsc` will be limited to type checking our code.</p>
                <a href="">Read article</a>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}
