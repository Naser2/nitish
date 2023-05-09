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
import FadeInSection from '@/components/FadeInSection'
import { SocialLinks } from '@/components/socialLinks'
import Nitish from '@/images/NF_Canada_745x490_0002_Nitish_Sakhuja.jpeg'

import project1 from '@/images/projects-1.png'
import project2 from '@/images/projects-2.png'
import project3 from '@/images/projects-3.png'
import project4 from '@/images/projects-4.png'
import projectXl1 from '@/images/projects-xl-1.png'
import projectXl2 from '@/images/projects-xl-1.png'
import Image from 'next/image'
import clsx from 'clsx'
export default function AboutPage() {
  return (
    <>
      <div class="hero-content -mt-10 lg:pt-16">
        <div class="flex  flex-col bg-gray-50 md:grid md:grid-cols-1 xl:px-14 min-[1400px]:grid-cols-2 ">
          <div class="row bg-white">
            <div className="lg:px--12">
              <img
                src={Nitish.src}
                alt="App screenshot"
                width={432}
                height={1242}
                className="about-banner [aspect-[552/640;] mt-10 md:mt-0"
                // className="aspect-[2400/1960] h-full   rounded-md  bg-white/5 ring-1 ring-white/10 lg:w-full xl:aspect-[2400/2060]"
              />
            </div>
          </div>
          <div className="grid  grid-cols-1 px-6 px-2 lg:grid-cols-2 min-[1399px]:grid-cols-1  ">
            <div className="team-member-details -mb-10 px-6 pt-0 md:hidden ">
              {' '}
              {/* <h1 class="member-name bg-gray-50/30 md:pb-2">
                <span className="font-extrabold">NITTY</span>
              </h1> */}
            </div>

            <div className="animate-fadeIn -mt-3 mb-4 bg-gray-50 px-6  pb-0 shadow-xl md:py-6  lg:pt-6 lg:pl-10 xl:mr-24 min-[1400px]:px-14 min-[1600px]:pl-14">
              <h1 class="member-name bg-gray-50/30 pb-2  md:pb-2 ">
                <span className="sr-only font-extrabold md:not-sr-only md:py-3">
                  Dangerous Comedian
                </span>
                <div class="lg:-mt-10px group relative mt-[1.23rem] mt-2 flex flex-none flex-col items-start border-transparent bg-sky-50/40 pb-2 text-left hover:border-t-2 md:pb-0 lg:w-[25vw] lg:border-t lg:border-sky-400 lg:hover:border-sky-400 ">
                  <div className="mt-4 flex inline-flex">
                    <h2 class="-mt-2  py-1.5  text-2xl   md:order-first  md:px-0  md:px-2  ">
                      Nitish Sakuja
                    </h2>{' '}
                    <svg
                      class="ml-0.5  mr-1.5 mt-1.5 h-5 w-5 flex-shrink-0 text-blue-400"
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
                  </div>
                  <div class="font-semubold -mt-2 text-lg  text-gray-600 ">
                    Comedian
                  </div>
                  <div className="font-semubold -mt-2  flex inline-flex space-x-6 text-sm  text-gray-600 ">
                    <h4 className="font-bold text-black">
                      6.4M <span className="font-semibold">followers</span>{' '}
                    </h4>
                    <h4>
                      <span className="font-bold text-black">following</span>{' '}
                      <span className="font-semibold text-black/70">2,183</span>
                    </h4>
                  </div>

                  <p className="-mt-1 pb-2 text-base text-slate-500  lg:mt-2 lg:text-lg">
                    Self Proclaimed Philosopher
                  </p>
                </div>

                <div className="my-2: m -mt-4">
                  <p className="lg:py-2">
                    <Link
                      href=" nitty@sakuja.com"
                      className="horver:text-blue-600 text-lg text-black/80 md:text-xl"
                    >
                      nitty@sakuja.com
                    </Link>
                  </p>
                </div>
              </h1>
              <div className="-mt-10 pb-4   md:flex">
                <SocialLinks animate={false} />
              </div>
              <div className="  bg-gray-50/20 ">
                <div class="group relative -mt-px flex flex-none flex-col items-start  border-t border-transparent border-t-slate-400  bg-gray-100/60 px-2 pt-4  text-left md:-ml-4 md:w-[35vw] md:px-4 md:pb-6 md:pt-4 lg:w-auto"></div>

                <FadeInSection>
                  <p className="animate-fadeIn paragraph   px-2  pt-0  pb-4  lg:text-xl ">
                    <span style={{ fontWeight: '400' }}>
                      Nitish Sakhuja, the comedian who smokes the biggest blunts
                      in Canada and gets some of the biggest laughs. He started
                      as a second generation Indian Canadian who loves comedy.
                      Born and raised in Toronto&apos;s Rexdale neighbourhood,
                      Nitish made his name as the funny guy on the block. He
                      quickly established that was no joke after winning both
                      Peterborough’s and Mississauga&apos;s funniest comic in
                      his first 2 months as a stand up. 10 years later he has
                      since gone on to be a crowd favourite at Kenny
                      Robinson&apos;s Nubian show as well as NXNE, The Okanagan
                      Comedy Festival, The Border Comedy Comedy Festival and
                      several others. Beyond Stand up, Nitish has blown up as an
                      actor after being seen in several commercials and
                      gathering millions of views starring in a web series for
                      HERB. Recently making his debut at Just For Laughs
                      Nitish&apos;s psychedilc and welcoming act is one you will
                      walk away happier after seeing.
                      <div
                        id="SOCIAL MEDIA HIDDEN LG & XL "
                        className="max-[1903px]:hidden"
                      ></div>
                    </span>
                  </p>
                </FadeInSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

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
