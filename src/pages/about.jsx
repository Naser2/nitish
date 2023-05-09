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
import { CommonSocialLinks } from '@/components/CommonSocial'
export default function AboutPage() {
  return (
    <>
      <div class="hero-content -mt-10 lg:pt-16">
        <div class="flex  flex-col bg-gray-50 md:grid md:grid-cols-1 xl:px-14 min-[1400px]:grid-cols-2 ">
          <div class="row bg-white lg:bg-gray-200/70">
            <div className="lg:px--12 ">
              <img
                src={Nitish.src}
                alt="App screenshot"
                width={432}
                height={1242}
                className="about-banner mt-10 aspect-[777/640] md:mt-0 lg:aspect-[588/504] xl:aspect-[668/504]"
                // className="aspect-[2400/1960] h-full   rounded-md  bg-white/5 ring-1 ring-white/10 lg:w-full xl:aspect-[2400/2060]"
              />
            </div>
            <div className="flex-col px-24  max-[1400px]:hidden ">
              <div className="my-2 mt-6 px-6">
                <p className="lg:py-2">
                  <Link
                    href=" nitty@sakuja.com"
                    className="text-sblack text-lg hover:text-blue-600 md:text-xl lg:text-2xl"
                  >
                    nitty@sakuja.com
                  </Link>
                </p>
              </div>

              <div className=" pb-4   md:flex">
                <CommonSocialLinks animate={false} />
              </div>
            </div>
          </div>

          <div className="grid  grid-cols-1 px-3  min-[1399px]:grid-cols-1  ">
            <div className="team-member-details -mb-10 px-6 pt-0 md:hidden ">
              {' '}
              {/* <h1 class="member-name bg-gray-50/30 md:pb-2">
                <span className="font-extrabold">NITTY</span>
              </h1> */}
            </div>

            <div className="animate-fadeIn  -mt-3 mb-4 bg-gray-50 px-6 pb-0  shadow-xl md:py-6 lg:pt-6  lg:pl-10 xl:px-24 ">
              <h1 class="member-name bg-gray-50/30 pb-2  md:pb-2 ">
                <div className="mt-4 flex inline-flex">
                  <h2 class="-mt-2  py-1.5  text-2xl   md:px-0 lg:text-4xl  xl:text-5xl  ">
                    Nitish Sakuja
                  </h2>{' '}
                  <svg
                    className="ml-2 mr-1.5  mt-0.5 h-6 w-6 flex-shrink-0 text-blue-400 lg:mt-1 lg:h-11 lg:w-11"
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
                <div className="lg:-mt-10px -transparent group relative mt-[1.23rem] mt-2 flex flex-none flex-col items-start bg-sky-50/40 pb-2 text-left hover:border-t-2 md:pb-0  lg:border-t lg:border-gray-400 lg:px-2 lg:hover:border-sky-400 ">
                  <div class="color-theme -mt-6 mb-4 text-xl  font-semibold text-black/80 md:-mt-0 lg:mt-4   lg:-mt-0 lg:text-3xl ">
                    Comedian
                  </div>
                  <p className="-mt-5 pb-4  text-base text-black/80 md:text-xl lg:-mt-2  lg:text-2xl">
                    Self Proclaimed Philosopher
                  </p>
                  <div className="font-semubold  -mt-5  flex  inline-flex space-x-6 text-lg text-black/80  text-black/80  lg:mb-4">
                    <h4 className="font-bold md:text-xl lg:text-2xl ">
                      6.4M{' '}
                      <span className="font-semibold text-black/80">
                        followers
                      </span>{' '}
                    </h4>
                    <span>| </span>
                    <h4>
                      <span className="font-bold text-black md:text-xl lg:text-2xl">
                        following
                      </span>{' '}
                      <span className="font-semibold text-black/70 md:text-xl lg:text-2xl">
                        2,183
                      </span>
                    </h4>
                  </div>
                  <div className="justify-stretch -ml-1 mt-2 flex flex-row  justify-end gap-x-4 md:-ml-0 md:text-lg lg:pt-0">
                    <Link
                      href="sms:+1 1(646)588-9578"
                      className="flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-800/80 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  lg:text-xl xl:text-xl"
                    >
                      Message
                    </Link>
                    <Link
                      href="/callendar"
                      className="flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-800/80 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  lg:text-xl xl:text-xl"
                    >
                      {/* <PhoneIcon
                              className="-ml-0.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            /> */}
                      Shows
                    </Link>
                    <Link
                      href="mailto:nitty@sakuja.com"
                      className="flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-800/80 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  lg:text-xl xl:text-xl"
                    >
                      {/* <PhoneIcon
                              className="-ml-0.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            /> */}
                      <span className="text-md font-bold ">+ </span> Book
                    </Link>
                    {/* TABS */}
                  </div>
                </div>

                {/* <div className="m my-2 -mt-6">
                  <p className="lg:py-2">
                    <Link
                      href=" nitty@sakuja.com"
                      className="text-lg text-sky-600 hover:text-blue-600 md:text-xl"
                    >
                      nitty@sakuja.com
                    </Link>
                  </p>
                </div> */}
              </h1>
              {/* <div className="-mt-10 pb-4   md:flex">
                <CommonSocialLinks animate={false} />
              </div> */}
              <div className=" bg-gray-50/20  min-[1800px]:xl:px-6 ">
                <div className="group relative -mt-px flex flex-none flex-col items-start  border-t border-transparent border-t-slate-400  bg-gray-100/60 px-2 pt-4  text-left md:-ml-4 md:w-[35vw] md:px-4 md:pb-6 md:pt-4 lg:w-auto"></div>

                <FadeInSection>
                  <p className="animate-fadeIn paragraph    pt-0  pb-4  lg:text-xl   ">
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
                      <div className="flex-col  bg-gray-100 px-4 py-2 min-[1400px]:hidden  ">
                        <div className="my-2 mt-6 ">
                          <p className=" lg:py-2">
                            <Link
                              href=" nitty@sakuja.com"
                              className="text-sblack text-sm text-blue-400  hover:text-blue-600 md:text-xl lg:text-xl"
                            >
                              NITTY@SAKUJA.COM
                            </Link>
                          </p>
                        </div>

                        <div className="-mt-1 pb-4  md:flex">
                          <CommonSocialLinks animate={false} />
                        </div>
                      </div>
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
