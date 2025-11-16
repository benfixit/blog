import { FaLinkedin, FaGithub } from "react-icons/fa6";
import styles from "@/app/ui/footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li className={styles.linkedin}>
                    <a href="https://www.linkedin.com/in/chukwuemeka-inya" target="_blank"><FaLinkedin size={20} color="#0072B1" /></a>
                </li>
                <li className={styles.github}>
                    <a href="https://github.com/benfixit" target="_blank"><FaGithub size={20} color="#000000" /></a>
                </li>
            </ul>
            <p>&copy; Chukwuemeka Inya, 2025.</p>
        </footer>
    );
}