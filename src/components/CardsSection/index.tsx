import styles from './styles.module.css'

export function CardsSection() {
  return (
    <section className={styles.cardsSession}>
      <div data-aos="fade-down" className={styles.card}>
        <img src="assets/card1.jpg" alt="Card image" />
        <div>
          <p>
            Launch campaigns but also find new customers. Our unique platform
            handles campaigns from start to end.
          </p>
          <a href="#">Learn More {'>'}</a>
        </div>
      </div>

      <div data-aos="fade-down" className={styles.card}>
        <img src="assets/card2.jpg" alt="Card image" />
        <div>
          <p>
            Start building and sharing with your team today. NinjaMail is
            renowned for its industry leading team collaboration tools.
          </p>
          <a href="#">Learn More {'>'}</a>
        </div>
      </div>

      <div data-aos="fade-down" className={styles.cardsSessionTexts}>
        <h3>The source for proven, engaging email campaigns</h3>
        <p>
          Whether you’re a startup, small business, e-commerce store, or want to
          promote your app, NinjaMail has the feature set tailored for your
          business.{' '}
        </p>
      </div>
    </section>
  )
}
