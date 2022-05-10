import Link from 'next/link'

import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" passHref>
          <a>
            <img src="logo-full.svg" alt="Logo" />
          </a>
        </Link>

        <nav>
          <Link href="/" passHref>
            <a>FEATURES</a>
          </Link>
          <Link href="/" passHref>
            <a>PRICING</a>
          </Link>
          <Link href="/" passHref>
            <a>SERVICES</a>
          </Link>
          <Link href="/" passHref>
            <a>PARTNERS</a>
          </Link>

          <button type="button">SIGN UP FREE</button>
        </nav>
      </div>
    </header>
  )
}
