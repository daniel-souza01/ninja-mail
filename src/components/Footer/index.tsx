import Link from 'next/link'

import styles from './styles.module.css'

export function Footer() {
  return (
    <>
      <footer className={styles.footerContainer}>
        <div className={styles.firstFooterGroup}>
          <Link href="/" passHref>
            <a data-aos="fade-down">
              <img src="logo-full.svg" alt="Logo" />
            </a>
          </Link>

          <div data-aos="fade-down" className={styles.footerLinks}>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
            <ul id={styles.secondUl}>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Templates</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Medium</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
            <ul id={styles.lastUl}>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Slack</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.secondFooterGroup}>
          <p>
            NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All
            rights reserved.
          </p>
          <div>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  )
}
