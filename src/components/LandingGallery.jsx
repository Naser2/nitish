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
import NitishCool from '@/images/nitishCool.jpeg'
import project1 from '@/images/projects-1.png'
import project2 from '@/images/projects-2.png'
import project3 from '@/images/projects-3.png'
import project4 from '@/images/projects-4.png'
import projectXl1 from '@/images/projects-xl-1.png'
import projectXl2 from '@/images/projects-xl-1.png'
import project1New from '@/images/projects-1-new.png'
import project1Blink from '@/images/project-blink-new.png'
import projectChain from '@/images/projectChain.png'
import project1Bracelets from '@/images/project1Bracelets.png'
import project1Fancy from '@/images/projectFancy.png'
import projectStoneJewlery from '@/images/projectStoneJewlery.png'
import projectSmoker from '@/images/projectSmoker.png'
import projectShakti from '@/images/projectShakti.png'
import projectPapperWallet1 from '@/images/projectPapperWallet1.png'
import projectPapperWallet2 from '@/images/projectPapperWallet2.png'
import projectSummerBoys from '@/images/projectSummerBoys.png'
import clsx from 'clsx'
import FadeInSection from './FadeInSection'
import Image from 'next/image'
import { useState } from 'react'
import NitishBanner from '@/images/NitishBanner.jpeg'

import { quotes } from '@/lib/quotes.js'
export default function LandingGallery() {
  const [renderQuote, setRenderQuote] = useState('See Joke')
  const [renderAuthor, setRenderAuthor] = useState('')
  const [clikedIndex, setClikedIndex] = useState(null)
  const randomQuote = (idex) => {
    const authors = Object.keys(quotes)
    const author = authors[Math.floor(Math.random() * authors.length)]
    const quote = quotes[author]

    setRenderQuote(quote)
    setRenderAuthor(author)
    setClikedIndex(idex)
    // return (
    //   <div className="opacity-1 absolute inset-y-60  inset-x-40 translate-x-[20%] ">
    //     <h1 className="mb-10 px-14 text-2xl font-semibold">{renderQuote}</h1>
    //     <p className="relative left-20 bottom-6 font-bold italic text-red-500">
    //       {renderAuthor}
    //     </p>
    //   </div>
    // )
  }

  return (
    <>
      <div className="relative -mt-0 mb-44 bg-yellow-500  lg:py-14">
        {/* <div className="">
          <div className="border-borderBlue my-5 flex h-[500px] w-96 flex-col items-center justify-center rounded-lg border-8 bg-white py-5">
            <h1 className="mb-10 px-14 text-2xl font-semibold">
              {renderQuote}
            </h1>
            <p className="relative left-20 bottom-6 font-bold italic text-red-500">
              {renderAuthor}
            </p>
          </div>

          <button
            onClick={() => randomQuote()}
            className="bg-vibrantBlue mt-5 rounded-lg p-3 text-white transition duration-150 ease-out hover:bg-blue-400 active:bg-gray-400 active:shadow-sm"
          >
            Generate Quote
          </button>
        </div> */}
        <div className="grid-cols-3 gap-x-2 space-y-1 py-1 px-0.5 pb-2 lg:grid lg:space-y-4 lg:px-2">
          <video
            controls
            src={'/nitish.mp4'}
            poster={'/nitish.mp4'}
            preload="metadata"
          ></video>{' '}
          <FadeInSection>
            <video
              controls
              src={'/nitish2.mp4'}
              poster={'/nitish2.mp4'}
              preload="metadata"
              className="lg:pt-2"
            ></video>
          </FadeInSection>
          <video
            controls
            src={'/nitish3.mp4'}
            poster={'/nitish3.mp4'}
            preload="metadata"
            className="lg:pt-10"
          ></video>
        </div>
        <div id="about-cta" className="mx-2 mt-2 mb-4   lg:-mt-4  lg:mb-8">
          <Link
            href="/videos"
            className="!css-n6s3hr !bg-black  px-3 px-3.5 !py-3 !font-bold  uppercase text-white shadow-sm hover:!bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            MORE VIDEOS<span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="animate-fadeIn  bg-black px-6 py-4 lg:bottom-20    min-[1400px]:px-14 min-[1600px]:px-24">
          <FadeInSection>
            <h1 className="member-name font-extra-bold !mb-4 pb-3 !text-white">
              <span>GOT JOKES??</span>
            </h1>
          </FadeInSection>
        </div>
        <img
          src={NitishCool.src}
          alt="App screenshot"
          width={1832}
          height={1242}
          className="about-banner mt-1  object-cover object-center max-[600px]:aspect-[1222/1640] lg:mt-0"
        />
        <Gallery
          projects={projects}
          grid="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-1"
          randomQuote={randomQuote}
          renderQuote={renderQuote}
          renderAuthor={renderAuthor}
          clikedIndex={clikedIndex}
        />

        <div id="about-cta" className="mx-2 py-8  lg:my-14 ">
          <Link
            href="/jokes"
            className="!css-n6s3hr !bg-black px-3 px-3.5 !py-3 !font-bold  uppercase text-white shadow-sm hover:!bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            MORE JOKES<span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </>
  )
}

const Gallery = ({
  projects,
  grid,
  randomQuote,
  renderQuote,
  renderAuthor,
  clikedIndex,
}) => {
  return (
    <section
      className={
        (grid ? 'max-w-none' : 'max-w-lg',
        ' dark:crisp-black min-[1391px]:-pt-4 rounded-sm bg-gray-100 pt-1  md:mt-1 md:rounded-lg  lg:bg-white')
      }
      id={`projects-media-gallery-`}
      aria-label="Newsletter"
      //   link={socialsRef}
    >
      {/* <Container className="mx-0 rounded-sm px-4  pt-2 sm:px-0 md:rounded-lg lg:mt-8 lg:px-6 lg:px-2 lg:pt-4 lg:pb-8"> */}
      <div role="list" className="dark:highlight-white/10 rounded-t-xl">
        {/* dark:border-indigo-500/20 */}
        {/* <div>
          <h2 class="max-w-64 pb-4 text-2xl font-semibold text-slate-600  md:order-first md:pb-0">
            PROJECTS
          </h2>
          <div class="max-w-24 flex  border-b border-sky-400 pb-4 font-semibold" />
        </div> */}
        <ul
          role="list"
          className={[grid ? grid : ' grid grid-cols-3 gap-x-4 gap-y-4 py-4']}
        >
          {projects.map((media, index) => {
            return (
              <button
                key={media.url}
                className="animate-fadeIn relative "
                onClick={() => randomQuote(index)}
              >
                <FadeInSection>
                  <div
                    className={clsx(
                      media.current
                        ? 'ring-2 ring-indigo-500 ring-offset-2'
                        : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                      'aspect-w-14 aspect-h-14 group relative block w-full overflow-hidden   bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'
                    )}
                  >
                    <div
                      style={{ backgroundColor: media.bg }}
                      className="pt-full top-0 z-50  bg-white shadow-lg transition-[filter] duration-500 "
                    >
                      <img
                        src="https://tailwindcss.com/_next/static/media/1.4985e539.jpg"
                        alt=""
                        class=" h-full w-full object-cover opacity-0"
                        decoding="async"
                        loading="lazy"
                      />
                      {index === clikedIndex ? (
                        <div className="opacity-1 absolute inset-0  items-center justify-center py-[10%] px-4 ">
                          <h3
                            className={clsx(
                              media.quoteColor,
                              'my-[30%]  mb-10 text-center text-2xl font-semibold lg:text-3xl'
                            )}
                          >
                            {renderQuote}
                          </h3>
                          <p
                            className={clsx(
                              media.authorColor,
                              'relative left-20 bottom-6  text-center  font-bold italic text-red-500'
                            )}
                          >
                            {renderAuthor}
                          </p>
                        </div>
                      ) : (
                        <>
                          <div class="absolute inset-y-[40%] inset-x-[14%] -mt-24 mb-10  items-center gap-4 p-4  text-center font-semibold lg:inline-flex lg:text-2xl">
                            <img
                              class="lg:h-34 lg:w-38 !h-[11rem] !w-[11rem]  rounded-full"
                              src={`${NitishCool.src}`}
                            />
                            <h2
                              class={clsx(
                                media.tapColor,
                                'flex px-12 text-lg font-medium  dark:text-slate-200 lg:text-2xl'
                              )}
                            >
                              {index / 2 === 2
                                ? 'Hit me again 😂'
                                : 'Hit me : ) '}
                            </h2>
                          </div>
                          <h3
                            className={clsx(
                              !media.tapColor,
                              'absolute inset-y-[40%] inset-x-[40%]  mb-10 text-center font-semibold lg:text-2xl'
                            )}
                          ></h3>
                        </>
                      )}
                    </div>
                  </div>
                </FadeInSection>
              </button>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
const projects = [
  {
    url: project1.src,
    bg: '#7a9aa573',
    quoteColor: 'text-black font-bold',
    authorColor: 'text-orange-400',
    tapColor: '!text-pink-400',
  },
  {
    url: project2.src,
    bg: '#fefefe6b',
    quoteColor: 'text-black font-bold',
    authorColor: '!text-gray-500',
    tapColor: '!text-pink-400',
  },
  {
    url: project3.src,
    bg: '#f5f7f7',
    quoteColor: 'text-black font-bold',
    authorColor: 'text-teal-600',
    tapColor: '!text-pink-400',
  },
  {
    url: project4.src,
    bg: '#0c0c0f',
    quoteColor: 'text-sky-400  font-extrabold',
    authorColor: '!text-red-300',
    tapColor: '!text-white',
  },
  {
    url: project2.src,
    bg: '#d80909bf',
    quoteColor: 'text-white font-bold',
    authorColor: 'text-yellow-400',
    tapColor: 'text-red-400',
  },
  {
    url: project2.src,
    bg: '#87fcfc24',
    quoteColor: 'text-black font-bold',
    authorColor: '00000',
    tapColor: '!text-black',
  },
  {
    url: project2.src,
    bg: 'text-white font-boldf',
    quoteColor: 'text-blackfont-bold',
    authorColor: '00000',
    tapColor: 'text-red-400',
  },
  {
    url: project2.src,
    bg: '#f2cd76',
    quoteColor: 'text-black font-bold',
    authorColor: 'text-white',
    tapColor: 'text-red-400',
  },
  {
    url: project2.src,
    bg: '#7f76f2a3',
    quoteColor: 'text-black font-bold',
    authorColor: '!text-white font-bold',
    tapColor: 'text-black',
  },

  {
    url: project2.src,
    bg: '#f5f5f500',
    quoteColor: '#fff',
    authorColor: 'text-indigo-400 font-bold',
    tapColor: '!text-black',
  },

  // { url: project2.src, bg: '#ffff' },
  // { url: project2.src, bg: '#f5c9c8' },

  // { url: project2.src, bg: '#32b5f0' },
  // { url: project2.src, bg: '#c5dfdfc7' },

  // { url: project2.src, bg: '#180909c2' },
  // { url: project2.src, bg: '#18ebed' },
  // { url: project2.src, bg: '#32b5f0' },
  //   { url: 'New Business/ Brand/ Product Launches' },
]
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
