import styles from './header.module.scss'
import Navbar from './navbar.js'
export default function Header() {

    return (<header className={styles.header}><h1 className={styles.h1}>Stonks.</h1>

        <Navbar />
    </header>
    )

}