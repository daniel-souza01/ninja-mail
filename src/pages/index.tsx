import Head from 'next/head'

import styles from './home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | NinjaMail</title>
      </Head>

      <main className={styles.homeContainer}>
        {/*<div className={styles.bgStuff}></div>*/}

        <session className={styles.hero}>
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
            src="hero_photo.svg"
            alt="Hero photo"
          />
        </session>

        <session className={styles.video}>
          <h1>Reach More Customers</h1>
          <button type="button">LEARN HOW</button>
        </session>

        <session className={styles.cardsSession}>

          <div className={styles.card}>
            <img src="tmp/card_photo_1.svg" alt="Card image"/>
            <div>
              <p>Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.</p>
              <a href="#">Learn More ></a>
            </div>
          </div>

          <div className={styles.card} >
            <img src="tmp/card_photo_2.svg" alt="Card image"/>
            <div>
              <p>Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools.</p>
              <a href="#">Learn More ></a>
            </div>
          </div>

          <div className={styles.cardsSessionTexts}>
            <h3>The source for proven, engaging email campaigns</h3>
            <p>Whether you’re a startup, small business, e-commerce store, or want to promote your app, NinjaMail has the feature set tailored for your business. </p>
          </div>
        </session>

        <session className={styles.emailInputSession}>
          <div className={styles.studyCases}>

            <div style={{ backgroundImage: `url("tmp/study_case_image_1.svg")`}}>
              <strong>Frankie</strong>
              <p>Member since 2016</p>
            </div>

            <div style={{ backgroundImage: `url("tmp/study_case_image_2.svg")`}}>
              <strong>Camile</strong>
              <p>Member since 2012</p>
            </div>

            <div style={{ backgroundImage: `url("tmp/study_case_image_3.svg")`}}>
              <strong>Elayne</strong>
              <p>Member since 2018</p>
            </div>
          </div>

          <h2>Learn how others are reaching their audience easier than ever before.</h2>
          
          <div className={styles.inputContainer}>
            <input type="email" placeholder="Enter your email"/>
            <button type="submit">JOIN OUR LIST</button>
            <span>Thanks! Email received.</span>
          </div>
        </session>

        <session className={styles.brandsSession}>
          <h2>All the best brands already use us.</h2>
          <div>
            <img src="/brands/last_knight.svg" alt="" />
            <img src="/brands/dragon_eye.svg" alt="" />
            <img src="/brands/quest_ai.svg" alt="" />
            <img src="/brands/radio_tee.svg" alt="" />
            <img src="/brands/game_commerce.svg" alt="" />
          </div>
        </session>

        <session className={styles.getStarted}>
          <h1>Get started today!</h1>
          <button type="button">PICK A PLAN</button>
        </session>
      </main>
    </>
  )
}
