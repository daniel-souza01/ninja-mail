import Link from 'next/link'

import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" passHref>
          <a>
            <img src="ninja_mail_logo.svg" alt="NinjaMail Logo" />
          </a>
        </Link>

        <nav>
          <a href="#">FEATURES</a>
          <a href="#">PRICING</a>
          <a href="#">SERVICES</a>
          <a href="#">PARTNERS</a>

          <button type="button">SIGN UP FREE</button>
        </nav>
      </div>
    </header>
  )
}
