import styles from './styles.module.css'

export function VideoSection() {
  return (
    <section
      data-aos="fade-down"
      className={styles.video}
      style={{ backgroundImage: `url("/assets/video.jpg")` }}
    >
      <h1>Reach More Customers</h1>
      <button type="button">LEARN HOW</button>
    </section>
  )
}
