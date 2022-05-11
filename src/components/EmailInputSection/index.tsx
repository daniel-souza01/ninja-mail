import styles from './styles.module.css'

export function EmailInputSection() {
  return (
    <section className={styles.emailInputSession}>
      <div className={styles.studyCases}>
        <div
          data-aos="fade-down"
          style={{ backgroundImage: `url("assets/frankie.jpg")` }}
        >
          <strong>Frankie</strong>
          <p>Member since 2016</p>
        </div>

        <div
          data-aos="fade-down"
          style={{ backgroundImage: `url("assets/camile.jpg")` }}
        >
          <strong>Camile</strong>
          <p>Member since 2012</p>
        </div>

        <div
          data-aos="fade-down"
          style={{ backgroundImage: `url("assets/elayne.jpg")` }}
        >
          <strong>Elayne</strong>
          <p>Member since 2018</p>
        </div>
      </div>

      <h2 data-aos="fade-down">
        Learn how others are reaching their audience easier than ever before.
      </h2>

      <div data-aos="fade-down" className={styles.inputContainer}>
        <div>
          <input type="email" placeholder="Enter your email" />
        </div>
        <button type="submit">JOIN OUR LIST</button>
      </div>
    </section>
  )
}
