import styles from './styles.module.css'

export function BrandsSection() {
  return (
    <section className={styles.brandsSession}>
      <h2 data-aos="fade-down">All the best brands already use us.</h2>
      <div>
        <img
          data-aos="fade-down"
          id={styles.lastKnightParis}
          src="/assets/last-knight-paris.png"
          alt="logo last knight paris"
        />
        <img
          data-aos="fade-down"
          id={styles.dragonEyeVodka}
          src="/assets/dragon-eye-vodka.png"
          alt="logo dragon eye vodka"
        />
        <img
          data-aos="fade-down"
          id={styles.questAi}
          src="/assets/quest-ai.png"
          alt="logo quest ai"
        />
        <img
          data-aos="fade-down"
          id={styles.radiotee}
          src="/assets/radiotee.png"
          alt="logo radiotree"
        />
        <img
          data-aos="fade-down"
          id={styles.gamecommerce}
          src="/assets/gamecommerce.png"
          alt="logo gamecommerce"
        />
      </div>
    </section>
  )
}
