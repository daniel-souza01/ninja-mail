import styles from './styles.module.css'

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeftItems}>
        <h1 data-aos="fade-left">Create Stunning Email Campaigns</h1>
        <p data-aos="fade-left">
          Create and launch email campaigns that captivate your customers in
          just a few clicks.
        </p>
        <div>
          <button data-aos="fade-down" type="button">
            TRY NOW
          </button>
          <button data-aos="fade-down" type="button">
            GET A DEMO
          </button>
        </div>
      </div>
      <img
        data-aos="zoom-out"
        className={styles.heroPhoto}
        src="assets/photo-hero.jpg"
        alt="Hero photo"
      />
    </section>
  )
}
