import Head from 'next/head'
import { useEffect } from 'react'
import Aos from 'aos'

import styles from './home.module.css'
import 'aos/dist/aos.css'
import { HeroSection } from '../components/HeroSection'
import { VideoSection } from '../components/VideoSection'
import { CardsSection } from '../components/CardsSection'
import { EmailInputSection } from '../components/EmailInputSection'
import { BrandsSection } from '../components/BrandsSection'
import { GetStartedSection } from '../components/GetStartedSection'

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])
  return (
    <>
      <Head>
        <title>NinjaMail</title>
      </Head>

      <main className={styles.homeContainer}>
        <img
          className={styles.bgStuff}
          src="background-stuff.png"
          alt="background stuff"
        />

        <HeroSection />

        <VideoSection />

        <CardsSection />

        <EmailInputSection />

        <BrandsSection />

        <GetStartedSection />
      </main>
    </>
  )
}
