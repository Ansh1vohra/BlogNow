import styles from "./Header.module.css";
import Link from 'next/link';

export default function Header() {
    return (
        <div className={styles.head}>
            <Link href="\" className={styles.logo}><div>BlogNow</div></Link>
            <Link href="\about"  className={styles.nav_link}><div>About Us</div></Link>
        </div>
    )
}