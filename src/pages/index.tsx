import Head from 'next/head'

import styles from './home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | NinjaMail</title>
      </Head>

      <main className={styles.homeContainer}>
        <img
          className={styles.bgStuff}
          src="background-stuff.png"
          alt="background stuff"
        />

        {/* ================= hero session ================== */}
        <section className={styles.hero}>
          <div className={styles.heroLeftItems}>
            <h1>Create Stunning Email Campaigns</h1>
            <p>
              Create and launch email campaigns that captivate your customers in
              just a few clicks.
            </p>
            <div>
              <button type="button">TRY NOW</button>
              <button type="button">GET A DEMO</button>
            </div>
          </div>
          <img
            className={styles.heroPhoto}
            src="assets/photo-hero.jpg"
            alt="Hero photo"
          />
        </section>

        {/* ================= video session ================== */}
        <section
          className={styles.video}
          style={{ backgroundImage: `url("/assets/video.jpg")` }}
        >
          <h1>Reach More Customers</h1>
          <button type="button">LEARN HOW</button>
        </section>

        {/* ================= cards session ================== */}
        <section className={styles.cardsSession}>
          <div className={styles.card}>
            <img src="assets/card1.jpg" alt="Card image" />
            <div>
              <p>
                Launch campaigns but also find new customers. Our unique
                platform handles campaigns from start to end.
              </p>
              <a href="#">Learn More {'>'}</a>
            </div>
          </div>

          <div className={styles.card}>
            <img src="assets/card2.jpg" alt="Card image" />
            <div>
              <p>
                Start building and sharing with your team today. NinjaMail is
                renowned for its industry leading team collaboration tools.
              </p>
              <a href="#">Learn More {'>'}</a>
            </div>
          </div>

          <div className={styles.cardsSessionTexts}>
            <h3>The source for proven, engaging email campaigns</h3>
            <p>
              Whether you’re a startup, small business, e-commerce store, or
              want to promote your app, NinjaMail has the feature set tailored
              for your business.{' '}
            </p>
          </div>
        </section>

        {/* ================= email input session ================== */}
        <section className={styles.emailInputSession}>
          <div className={styles.studyCases}>
            <div style={{ backgroundImage: `url("assets/frankie.jpg")` }}>
              <strong>Frankie</strong>
              <p>Member since 2016</p>
            </div>

            <div style={{ backgroundImage: `url("assets/camile.jpg")` }}>
              <strong>Camile</strong>
              <p>Member since 2012</p>
            </div>

            <div style={{ backgroundImage: `url("assets/elayne.jpg")` }}>
              <strong>Elayne</strong>
              <p>Member since 2018</p>
            </div>
          </div>

          <h2>
            Learn how others are reaching their audience easier than ever
            before.
          </h2>

          <div className={styles.inputContainer}>
            <div>
              <input type="email" placeholder="Enter your email" />
            </div>
            <button type="submit">JOIN OUR LIST</button>
          </div>
        </section>

        {/* ================= brands session ================== */}
        <section className={styles.brandsSession}>
          <h2>All the best brands already use us.</h2>
          <div>
            <img
              id={styles.lastKnightParis}
              src="/assets/last-knight-paris.png"
              alt="logo last knight paris"
            />
            <img
              id={styles.dragonEyeVodka}
              src="/assets/dragon-eye-vodka.png"
              alt="logo dragon eye vodka"
            />
            <img
              id={styles.questAi}
              src="/assets/quest-ai.png"
              alt="logo quest ai"
            />
            <img
              id={styles.radiotee}
              src="/assets/radiotee.png"
              alt="logo radiotree"
            />
            <img
              id={styles.gamecommerce}
              src="/assets/gamecommerce.png"
              alt="logo gamecommerce"
            />
          </div>
        </section>

        {/* ================= get started session ================== */}
        <section className={styles.getStarted}>
          <h1>Get started today!</h1>
          <button type="button">PICK A PLAN</button>
        </section>
      </main>
    </>
  )
}
