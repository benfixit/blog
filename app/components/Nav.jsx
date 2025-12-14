"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";
import styles from "@/app/ui/nav.module.css";



const Nav = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        let newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    }

    if (!mounted) {
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