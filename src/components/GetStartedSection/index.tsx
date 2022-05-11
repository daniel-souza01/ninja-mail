import styles from './styles.module.css'

export function GetStartedSection() {
  return (
    <section className={styles.getStarted}>
      <h1 data-aos="fade-down">Get started today!</h1>
      <button data-aos="fade-down" type="button">
        PICK A PLAN
      </button>
    </section>
  )
}
