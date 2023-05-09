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

import project1 from '@/images/projects-1.png'
import project2 from '@/images/projects-2.png'
import project3 from '@/images/projects-3.png'
import project4 from '@/images/projects-4.png'
import projectXl1 from '@/images/projects-xl-1.png'
import projectXl2 from '@/images/projects-xl-1.png'
import Nitish from '@/images/NF_Canada_745x490_0002_Nitish_Sakhuja.jpeg'
import clsx from 'clsx'
import FadeInSection from './FadeInSection'
import Image from 'next/image'
import { SocialLinks } from './socialLinks'
import { useEffect, useState } from 'react'

export default function AboutSection() {
  const [enlargeCompanyText, setEnlargeCompanyText] = useState(null)
  const [enlargeArtistName, setEnlargeArtistName] = useState(null)
  const [socialMarginTop, setSocialMarginTop] = useState(null)
  // !-mt-1
  useEffect(() => {
    setTimeout(() => {
      setEnlargeCompanyText('text-lg  lg:!text-2xl ')
    }, '5500')
    setTimeout(() => {
      setEnlargeArtistName('!text-lg  lg:!text-6xl')
    }, '1500')
    setTimeout(() => {
      setSocialMarginTop('mt-8')
    }, '4750')
    setTimeout(() => {
      setSocialMarginTop('!-mt-1  mt-0')
    }, '7750')
    // setTimeout(() => {
    //   setSocialMarginTop(' !mt-20')
    // }, '8750')
    // setTimeout(() => {
    //   setSocialMarginTop(' !mt-0')
    // }, '9250')
    // return setEnlargeCompanyText('lg:!text-2xl ')
  }, [])
  return (
    <div className="xl::grid-cols-2 relative -mt-6 mb-0 grid grid-cols-1 border-b-4  border-b border-yellow-500  lg:py-4">
      <div class="lg:mt-0">
        <div class="relative mt-2  ">
          <div class="col-12">
            <img
              src={Nitish.src}
              alt="App screenshot"
              width={1832}
              height={1242}
              className="about-banner mt-10 object-cover object-center max-[600px]:aspect-[1222/1640]  md:mt-0 xl:rounded-xl"
            />
            <div className=" animate-fadeIn-slow absolute inset-y-[68%] left-[2rem] z-50 !mb-4 pb-3  lg:inset-y-[38%] lg:inset-x-[52%] lg:left-[3rem] ">
              <h1
                className="animate-fadeIn-very-slow member-name font-extra-bol z-50 !text-sm shadow-zinc-400/5 
              shadow-zinc-200/5 ring-white/10 backdrop-blur dark:text-zinc-200  "
              >
                <span
                  className=" rounded-xl px-4  py-2 shadow-zinc-400 ring-white/10 
              backdrop-blur hover:shadow-zinc-200"
                >
                  <span className={clsx(enlargeArtistName, '  inline-flex')}>
                    NITISH SAKHUJA{' '}
                    <svg
                      class="ml-2 mr-1.5  mt-0.5 h-6 w-6 flex-shrink-0 text-blue-400 lg:mt-2 lg:h-12 lg:w-12"
                      x-description="Heroicon name: mini/check-circle"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </h1>
              <div class="group relative mx-4 !-mt-8 flex flex-none flex-col items-start text-left  lg:-mt-[1.23rem] lg:max-w-[35vw]  ">
                <div className="animate-fadeIn-very-slow  comedian-companny flex inline-flex bg-slate-200/20 ">
                  <h2
                    className={clsx(
                      enlargeCompanyText,
                      'slideInLeft  rollInFromRight  !-mt-6  py-1.5 !text-sm  font-bold text-white md:order-first md:px-0    md:px-2  lg:!-mt-4  '
                    )}
                  >
                    COMEDIAN
                  </h2>{' '}
                  <h2
                    className={clsx(
                      enlargeCompanyText,
                      'slideInLeft  rollInFromRight  !-mt-2  py-1.5 !text-sm  font-bold text-white md:order-first md:px-0    md:px-2  lg:!-mt-4  '
                    )}
                  >
                    BAIRD ARTISTS MANAGEMENT
                  </h2>{' '}
                  <h3 className="slideInLeft rollInFromRight animate-rollIn5  !my-4 !mt-5  text-sm font-bold text-white   md:px-0 md:px-2  lg:!mt-6  lg:text-lg">
                    CHECK OUT MY ALBUM
                    <Link
                      href="/person-of-color "
                      className="opacity-1 !z-50 mx-2 rounded-md bg-white/90 px-2 py-1.5 text-orange-600/90"
                    >
                      Person of Color
                    </Link>
                  </h3>
                </div>
                <div
                  class={clsx(
                    socialMarginTop,
                    'animate-rollIn about-section-social font-semubold  inline-flex rounded-lg pt-4 pr-6 text-lg text-gray-600 max-[1800px]:!left-[-71%] max-[600px]:!left-[-99%] lg:!mt-12 min-[1900px]:left-[-52%] '
                  )}
                >
                  <div className="animate-bg  absolute inset-0 !z-30 max-[700px]:opacity-[0.5] " />
                  <h2 className="justify-centertext-center ml-24 font-bold text-black max-[600px]:hidden lg:text-2xl ">
                    LINKS
                  </h2>
                  <SocialLinks animate />
                </div>

                {/* <p className="mt-0 text-base text-slate-500  lg:mt-2 lg:text-lg">
                  Self Proclaimed Philosopher
                </p> */}
              </div>
            </div>
            <div className="animate-fadeIn-slow  left-[3rem]  z-50  !mb-4 flex px-12   pb-3  max-[1400px]:hidden  ">
              <h1
                className="member-name font-extra-bol z-50 inline-flex !text-6xl shadow-zinc-400/5
              shadow-zinc-200/5 ring-white/10 backdrop-blur dark:text-zinc-200 "
              >
                {/* <span
                  className="rounded-xl px-4 py-2   shadow-zinc-400 ring-white/10 
              backdrop-blur hover:shadow-zinc-200"
                >
                  Comedian
                </span> */}
                <h3 className="inline-flex bg-slate-400/30   px-2 text-3xl text-slate-200 ">
                  {' '}
                  Self Proclaimed Philosopher
                </h3>
                {/* <h3 className="inline-flex  bg-slate-400/30  px-2 text-3xl text-slate-200 ">
                  {' '}
                 Philosopher
                </h3> */}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="animate-fadeIn  bg-black px-6 py-6 lg:bottom-20 lg:bg-slate-100/90 lg:py-0   min-[1400px]:px-14 min-[1600px]:px-24">
        <FadeInSection>
          <h1 className="member-name font-extra-bold !mb-4 pb-3 !text-white  lg:!text-black">
            <span>BIO</span>
          </h1>
        </FadeInSection>
      </div>
      <div className="animate-fadeIn  border-10 border-t border-t-yellow-500  bg-slate-100/80 px-6 py-6 lg:bottom-20 lg:border-t-slate-100/80 lg:bg-slate-100/90 lg:py-0    min-[1400px]:px-14 min-[1600px]:px-24">
        <p className="animate-fadeIn paragraph text-sm lg:text-2xl">
          <span>
            Nitish Sakhuja, the comedian who smokes the biggest blunts in Canada
            and gets some of the biggest laughs. He started as a second
            generation Indian Canadian who loves comedy. Born and raised in
            Toronto&apos;s Rexdale neighbourhood, Nitish made his name as the
            funny guy on the block. He quickly established that was no joke
            after winning both Peterborough’s and Mississauga&apos;s funniest
            comic in ...
          </span>
        </p>
        <div id="about-cta" className="mt-8 lg:my-14 ">
          <Link
            href="/about"
            className="!css-n6s3hr  !bg-black px-3 px-3.5 !py-3  uppercase text-white shadow-sm hover:!bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Read more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

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

const xxLprojects = [
  { url: project2.src },
  { url: project1.src },

  { url: projectXl1.src },
  { url: projectXl2.src },
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
