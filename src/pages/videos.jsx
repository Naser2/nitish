import somaAbout from '@/images/soma-about-image.png'
import Link from 'next/link'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  BoltIcon,
  CalendarDaysIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import NitishHeroImg2 from '@/images/nitishIcon.jpeg'
import FadeInSection from '@/components/FadeInSection'
import { SocialLinks } from '@/components/socialLinks'
// import NitishsLogo from '@/images/Nitish-logo.png'
// import NitishsMainImg from '@/images/NitishMainImg.png'
import project1 from '@/images/projects-1.png'
import project2 from '@/images/projects-2.png'
import project3 from '@/images/projects-3.png'
import project4 from '@/images/projects-4.png'
import projectXl1 from '@/images/projects-xl-1.png'
import nittyVideosBanner from '@/images/nittyVideosBanner.jpeg'
import Image from 'next/image'
import clsx from 'clsx'
import { Services } from '@/components/Hero'
export default function ServicesPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
  return (
    <>
      <div id="services" className="relative isolate mt-0">
        <img
          src={nittyVideosBanner.src}
          alt="App screenshot"
          width={1832}
          height={1242}
          className="about-banner object-cover object-center max-[600px]:aspect-[2102/1640] min-[600px]:aspect-[2160/1640]  md:mt-0 xl:rounded-xl"
        />

        {/* <img
          src={NitishBanner.src}
          alt="App screenshot"
          width={1832}
          height={1242}
          className="about-banner mt-1 object-cover object-center max-[600px]:aspect-[1222/1640]  md:mt-0 xl:rounded-xl"
        /> */}
        <div className="max-w-9xl mx-auto items-center  justify-center bg-gray-50/50 px-6 px-6  pt-10 pb-24 pt-2 sm:pb-40 md:px-14 lg:flex">
          <motion.div animate={{ x: 100 }} transition={{ delay: 1 }} />{' '}
          <div className="flex-shrink-1 lg:max-w-10xl mx-auto mt-4 max-w-6xl lg:mx-0 lg:pt-8 ">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl  lg:mt-10">
              <h2 class="text-base font-semibold leading-7 text-blue-400 lg:text-xl ">
                Videos
              </h2>
              Standups & Episodes
            </h1>
            <div className="grid-cols-3 gap-x-2 space-y-1 py-1 px-0.5 pb-2 lg:grid lg:!space-y-4 lg:px-2">
              <video
                controls
                src={'/nitish8.mp4'}
                poster={'/nitish8.mp4'}
                preload="metadata"
                className="lg:mt-4"
              ></video>{' '}
              <FadeInSection>
                <video
                  controls
                  src={'/nitish.mp4'}
                  poster={'/nitish.mp4'}
                  preload="metadata"
                  // className="lg:-mt-4"
                ></video>
              </FadeInSection>
              <video
                controls
                source={'/nitish2.mp4'}
                poster={'/nitish2.mp4'}
                preload="metadata"
                // className="lg:!-mt-6"
              ></video>
              <video
                controls
                src={'/nitish3.mp4'}
                poster={'/nitish3.mp4'}
                preload="metadata"
                // className="lg:!-mt-1"
              ></video>
              <FadeInSection>
                <video
                  controls
                  source={'/nitish9.mp4'}
                  poster={'/nitish9.mp4'}
                  className="lg:!-mt-0"
                  preload="metadata"
                ></video>
              </FadeInSection>
              <video
                // controls
                // poster={'/nitish4.mp4'}
                // src={'/nitish4.mp4'}
                src="/nitish4.mp4"
                thumbnail="/nitish4.mp4"
                // onBlurCapture="/nitish4.mp4"
                blurpUrl="/nitish4.mp4"
                // preload="metadata"
                className="lg:!-mt-2"
              ></video>
              <video
                controls
                src={'/nitish5.mp4'}
                thumbnail="/nitish5.mp4"
                onBlurCapture="/nitish5.mp4"
                preload="metadata"
                className=""
              ></video>
              <FadeInSection>
                <video
                  controls
                  src={'/nitish6.mp4'}
                  preload="metadata"
                  className=""
                ></video>
              </FadeInSection>
              <video
                controls
                src={'/nitish7.mp4'}
                poster={'/nitish7.mp4'}
                className=""
              ></video>
            </div>
            <div className=" mt-24 py-0 md:px-0  ">
              <h3
                style={{
                  letterSpacing: '0.1em',
                }}
                className="text-2 color_15 font_5  font_4 !text-left !font-extrabold "
              >
                Thanks for watching.
              </h3>
            </div>

            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/jokes"
                className=" bg-blue-500 px-3.5 py-2.5 text-xl  text-sm font-semibold text-white shadow-sm hover:bg-black hover:bg-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                SEE JOKES
              </Link>
              {/* <a
                href="#detailedExpertise"
                className="text-xl  font-semibold leading-6 text-black "
              >
                Learn More <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
          {/* <div className="mx-auto mt-16 flex max-w-3xl flex-col sm:mt-24  lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-4xl flex-none  sm:max-w-7xl lg:max-w-none">
              <motion.ul variants={container} initial="hidden" animate="show">
                {' '}
                <div className="flex flex-col gap-x-6 gap-y-6  lg:grid lg:grid-cols-2">
                  {expertises.map((expertise) => {
                    return (
                      // <motion.li key={expertise.name} variants={item}>
                      <a
                        href="#detailedExpertise"
                        key={expertise.name}
                        className="pointer-events-auto relative z-10 flex items-center justify-center bg-white p-6 text-[0.8125rem] text-sm font-medium leading-5 text-gray-700 shadow-xl shadow-black/5 ring-2 ring-black 
                              duration-200 ease-out hover:bg-slate-50 hover:text-gray-800 hover:transition-colors lg:w-[23rem] "
                      >
                        <h1
                          // href="#detailedExpertise"
                          className="flex justify-center  text-center text-xl font-semibold leading-7 text-black  lg:text-2xl"
                        >
                          {expertise.name}
                        </h1>
                      </a>
                      // </motion.li>
                    )
                  })}
                </div>{' '}
              </motion.ul>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

const expertises = [
  // {nameSOMA LISA CHOUDHURY}

  { name: 'Global Marketing' },
  { name: 'Brand Strategy & Development' },
  { name: 'Product Strategy & Digital Marketing Development' },
  { name: 'Social Media Strategy & Execution' },
  { name: 'New Business/ Brand/ Product Launches' },
  { name: 'New Business/ Brand/ Product Launches' },
]

const projects = [
  { url: project1.src },
  { url: project2.src },
  { url: project3.src },
  { url: project4.src },
  { url: project3.src },
  { url: project4.src },
  //   { url: 'New Business/ Brand/ Product Launches' },
  //   { url: 'New Business/ Brand/ Product Launches' },
]
const xLprojects = [
  { url: project1.src },
  { url: project2.src },
  { url: project3.src },
  { url: project4.src },
  { url: project3.src },
  { url: project4.src },
  { url: project3.src },
  { url: project4.src },

  //   { url: 'New Business/ Brand/ Product Launches' },
  //   { url: 'New Business/ Brand/ Product Launches' },
]

const xxLprojects = [
  { url: project2.src },
  { url: project1.src },

  { url: projectXl1.src },
  // { url: projectXl2.src },
  { url: project4.src },
  { url: project3.src },
  { url: project4.src },
  { url: project3.src },
  //   { url: project4.src },
  //   { url: project4.src },
  //   { url: project1.src },
  //   { url: project4.src },
  //   { url: project1.src },

  //   { url: 'New Business/ Brand/ Product Launches' },
  //   { url: 'New Business/ Brand/ Product Launches' },
]

const Gallery = ({ projects, grid }) => {
  return (
    <section
      className={
        (grid ? 'max-w-none' : 'max-w-lg',
        ' dark:crisp-black min-[1391px]:-pt-24 rounded-sm bg-gray-100 px-8 pt-6 md:mx-4 md:mt-1 md:rounded-lg  lg:bg-white lg:px-0  min-[1391px]:px-8 min-[1591px]:px-12 ')
      }
      id={`projects-media-gallery-`}
      aria-label="Newsletter"
      //   link={socialsRef}
    >
      {/* <Container className="mx-0 rounded-sm px-4  pt-2 sm:px-0 md:rounded-lg lg:mt-8 lg:px-6 lg:px-2 lg:pt-4 lg:pb-8"> */}
      <div role="list" className="dark:highlight-white/10 rounded-t-xl">
        {/* dark:border-indigo-500/20 */}
        <div>
          <h2 class="max-w-64 pb-4 text-2xl font-semibold text-slate-600  md:order-first md:pb-0">
            PROJECTS
          </h2>
          <div class="max-w-24 flex  border-b border-sky-400 pb-4 font-semibold" />
        </div>
        <ul
          role="list"
          className={[grid ? grid : ' grid grid-cols-3 gap-x-4 gap-y-4 py-4']}
        >
          {projects.map((img) => {
            return (
              <li key={img.url} className="relative">
                <div
                  className={clsx(
                    img.current
                      ? 'ring-2 ring-indigo-500 ring-offset-2'
                      : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                    'aspect-w-14 aspect-h-14 group block w-full overflow-hidden  rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'
                  )}
                >
                  <Image
                    src={img.url ?? img}
                    alt=""
                    className={clsx(
                      img.current ? '' : 'group-hover:opacity-75',
                      'pointer-events-none object-cover'
                    )}
                    width={grid ? 400 : 200}
                    height={grid ? 400 : 200}
                  />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

const primaryFeatures = [
  {
    name: 'Branding Strategy & Development',
    description:
      'Defines the essence and soul of brands based on the vision of the founders & designers, based on the needs, desires, and emotional experience of consumers. Possesses expansive network of global talent to executeon breakthrough marketing strategies and campaigns. Creatively directs an elite network of photographers, videographers,designers, storytellers, models, event planners, & public personalities.',
    href: '#',
    icon: BoltIcon,
  },
  {
    name: 'Product Strategy & Digital Marketing Development:',
    description:
      ' Works with business & creative teams to define the product vision, digital marketing development, strategy and differentiation based on intimate experience with the competitive landscape as well asempirical methods that allow for a deep understanding of unmet consumer needs. Enables teams to realize their vision by executing across the supply-chain through marketing strategies and campaigns, by orchestrating unique product launches byintegrating online, social, and offline channels, seamlessly.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Social Media Strategy & Execution',
    description:
      ' Brings a keen and discerning eye for online, social, and offline media design,curation and seamless integration. Designs campaigns and messages targeting the needs of a brand, while providing an immaculate experience for desired consumers and audiences of the brand.',
    href: '#',
    icon: CalendarDaysIcon,
  },
]
