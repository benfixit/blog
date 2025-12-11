import styles from "@/app/ui/nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <h1>
                <a href="/">CI</a>
            </h1>
            <ul>
                <a href="https://emekainya.com/projects" target="_blank">Projects</a>
            </ul>
        </nav>
    );
}

export default Nav;