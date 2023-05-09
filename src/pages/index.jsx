import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Contact, Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Clients, Reviews } from '@/components/Clients'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
// import NitishsMainImg from '@/images/NitishMainImg.png'
import { motion, useScroll } from 'framer-motion'
import FadeInSection from '@/components/FadeInSection'
import { SectionHero } from '@/components/SectionHero'
import About from '@/components/About'
import LandingGallery from '@/components/LandingGallery'
import nittyVideosBanner from '@/images/personOfColor.jpeg'
import NitishBanner from '@/images/NitishBanner.jpeg'
// function Component() {
//   const { scrollYProgress } = useScroll();

//   return (
//     <motion.div style={{ scaleX: scrollYProgress }} />
//   )
// }
export default function Home() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <Head>
        <title>Nitish - Comedian - Canda Biggest Blunt Smokers </title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>

      <motion.div
        className="progress-bar z-40 h-2 bg-sky-400/30"
        style={{ scaleX: scrollYProgress }}
      />
      <main className="overflow-hidden dark:bg-black lg:px-14 xl:px-24">
        {/* <SectionHero /> */}
        <About />
        <div className="animate-fadeIn  bg-black px-6 pt-4 lg:bottom-20   min-[1400px]:px-14 min-[1600px]:px-24">
          <FadeInSection>
            <h1 className="member-name font-extra-bold !mb-4 pb-3 !text-white  lg:!text-white">
              <span>ALBUM</span>
            </h1>
          </FadeInSection>
        </div>
        <img
          src={nittyVideosBanner.src}
          alt="App screenshot"
          width={1832}
          height={1242}
          className="about-banner mt-10 object-cover object-center max-[600px]:aspect-[2102/1640]  min-[600px]:aspect-[2160/1640] md:mt-0"
        />
        <LandingGallery />
        <img
          src={NitishBanner.src}
          alt="App screenshot"
          width={1832}
          height={1242}
          className="about-banner -mt-44  object-cover object-center max-[600px]:aspect-[1222/1640] lg:-mt-64"
        />
        {/* <Contact /> */}
      </main>
    </>
  )
}
