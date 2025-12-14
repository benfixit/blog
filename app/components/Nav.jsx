"use client";

import { FaMoon, FaSun } from "react-icons/fa6";
import styles from "@/app/ui/nav.module.css";
import { useTheme } from "next-themes";

const Nav = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        let newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    }

    if (!theme) {
        return null;
    }

    return (
        <nav className={styles.nav}>
            <h1>
                <a href="/">CI</a>
            </h1>
            <ul>
                <button onClick={toggleTheme}>{theme === "dark" ? <FaSun /> : <FaMoon />}</button>
            </ul>
        </nav>
    );
}

export default Nav;