import styles from './navbar.module.scss'
import Link from 'next/link'
export default function Navbar() {

    return (<ul className={styles.ul}>
        <li className={styles.li}><Link href="/portfolio">PoRTfolio</Link></li>
        <li className={styles.li}><Link href="/explorer">Explorer</Link></li>
        </ul>
    )

}