import { useId, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { AppScreen } from '@/components/AppScreen'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'

// import NitishsLogo from '@/images/Nitish-logo.png'
// import NitishsMainImg from '@/images/NitishMainImg.png'
// import NitishHeroImg2 from '@/images/Nitish-hero-img-2.png'
import {
  ArrowPathIcon,
  // ChevronRightIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import {
  BoltIcon,
  CalendarDaysIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import About from './About'
import { Clients } from './Clients'
import FadeInSection from './FadeInSection'
function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

const prices = [
  997.56, 944.34, 972.25, 832.4, 888.76, 834.8, 805.56, 767.38, 861.21, 669.6,
  694.39, 721.32, 694.03, 610.1, 502.2, 549.56, 611.03, 583.4, 610.14, 660.6,
  752.11, 721.19, 638.89, 661.7, 694.51, 580.3, 638.0, 613.3, 651.64, 560.51,
  611.45, 670.68, 752.56,
]
const maxPrice = Math.max(...prices)
const minPrice = Math.min(...prices)

function Chart({
  className,
  activePointIndex,
  onChangeActivePointIndex,
  width: totalWidth,
  height: totalHeight,
  paddingX = 0,
  paddingY = 0,
  gridLines = 6,
  ...props
}) {
  let width = totalWidth - paddingX * 2
  let height = totalHeight - paddingY * 2

  let id = useId()
  let svgRef = useRef()
  let pathRef = useRef()
  let isInView = useInView(svgRef, { amount: 0.5, once: true })
  let pathWidth = useMotionValue(0)
  let [interactionEnabled, setInteractionEnabled] = useState(false)

  let path = ''
  let points = []

  for (let index = 0; index < prices.length; index++) {
    let x = paddingX + (index / (prices.length - 1)) * width
    let y =
      paddingY +
      (1 - (prices[index] - minPrice) / (maxPrice - minPrice)) * height
    points.push({ x, y })
    path += `${index === 0 ? 'M' : 'L'} ${x.toFixed(4)} ${y.toFixed(4)}`
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      className={clsx(className, 'overflow-visible')}
      {...(interactionEnabled
        ? {
            onPointerLeave: () => onChangeActivePointIndex(null),
            onPointerMove: (event) => {
              let x = event.nativeEvent.offsetX
              let closestPointIndex
              let closestDistance = Infinity
              for (
                let pointIndex = 0;
                pointIndex < points.length;
                pointIndex++
              ) {
                let point = points[pointIndex]
                let distance = Math.abs(point.x - x)
                if (distance < closestDistance) {
                  closestDistance = distance
                  closestPointIndex = pointIndex
                } else {
                  break
                }
              }
              onChangeActivePointIndex(closestPointIndex)
            },
          }
        : {})}
      {...props}
    >
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={`${path} V ${height + paddingY} H ${paddingX} Z`} />
        </clipPath>
        <linearGradient id={`${id}-gradient`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#13B5C8" />
          <stop offset="100%" stopColor="#13B5C8" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(gridLines - 1).keys()].map((index) => (
        <line
          key={index}
          stroke="#a3a3a3"
          opacity="0.1"
          x1="0"
          y1={(totalHeight / gridLines) * (index + 1)}
          x2={totalWidth}
          y2={(totalHeight / gridLines) * (index + 1)}
        />
      ))}
      <motion.rect
        y={paddingY}
        width={pathWidth}
        height={height}
        fill={`url(#${id}-gradient)`}
        clipPath={`url(#${id}-clip)`}
        opacity="0.5"
      />
      <motion.path
        ref={pathRef}
        d={path}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        transition={{ duration: 1 }}
        {...(isInView ? { stroke: '#06b6d4', animate: { pathLength: 1 } } : {})}
        onUpdate={({ pathLength }) => {
          pathWidth.set(
            pathRef.current.getPointAtLength(
              pathLength * pathRef.current.getTotalLength()
            ).x
          )
        }}
        onAnimationComplete={() => setInteractionEnabled(true)}
      />
      {activePointIndex !== null && (
        <>
          <line
            x1="0"
            y1={points[activePointIndex].y}
            x2={totalWidth}
            y2={points[activePointIndex].y}
            stroke="#06b6d4"
            strokeDasharray="1 3"
          />
          <circle
            r="4"
            cx={points[activePointIndex].x}
            cy={points[activePointIndex].y}
            fill="#fff"
            strokeWidth="2"
            stroke="#06b6d4"
          />
        </>
      )}
    </svg>
  )
}

function AppDemo() {
  let [activePointIndex, setActivePointIndex] = useState(null)
  let activePriceIndex = activePointIndex ?? prices.length - 1
  let activeValue = prices[activePriceIndex]
  let previousValue = prices[activePriceIndex - 1]
  let percentageChange =
    activePriceIndex === 0
      ? null
      : ((activeValue - previousValue) / previousValue) * 100

  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="p-4">
          <div className="flex gap-2">
            <div className="text-xs leading-6 text-gray-500">
              Tailwind Labs, Inc.
            </div>
            <div className="text-sm text-gray-900">$CSS</div>
            <svg viewBox="0 0 24 24" className="ml-auto h-6 w-6" fill="none">
              <path
                d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0ZM12 9v6M15 12H9"
                stroke="#171717"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mt-3 border-t border-gray-200 pt-5">
            <div className="flex items-baseline gap-2">
              <div className="text-2xl tabular-nums tracking-tight text-gray-900">
                {activeValue.toFixed(2)}
              </div>
              <div className="text-sm text-gray-900">USD</div>
              {percentageChange && (
                <div
                  className={clsx(
                    'ml-auto text-sm tabular-nums tracking-tight',
                    percentageChange >= 0 ? 'text-cyan-500' : 'text-gray-500'
                  )}
                >
                  {`${
                    percentageChange >= 0 ? '+' : ''
                  }${percentageChange.toFixed(2)}%`}
                </div>
              )}
            </div>
            <div className="mt-6 flex gap-4 text-xs text-gray-500">
              <div>1D</div>
              <div>5D</div>
              <div className="font-semibold text-cyan-600">1M</div>
              <div>6M</div>
              <div>1Y</div>
              <div>5Y</div>
            </div>
            <div className="mt-3 rounded-lg bg-gray-50 ring-1 ring-inset ring-black/5">
              <Chart
                width={286}
                height={208}
                paddingX={16}
                paddingY={32}
                activePointIndex={activePointIndex}
                onChangeActivePointIndex={setActivePointIndex}
              />
            </div>
            <div className="mt-4 rounded-lg bg-cyan-500 py-2 px-4 text-center text-sm font-semibold text-black ">
              Trade
            </div>
            <div className="mt-3 divide-y divide-gray-100 text-sm">
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Open</div>
                <div className="font-medium text-gray-900">6,387.55</div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Closed</div>
                <div className="font-medium text-gray-900">6,487.09</div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Low</div>
                <div className="font-medium text-gray-900">6,322.01</div>
              </div>
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
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
const secondaryFeatures = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Powerful API.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
    icon: ServerIcon,
  },
]
const stats = [
  { id: 1, name: 'Developers on the platform', value: '8,000+' },
  { id: 2, name: 'Daily requests', value: '900m+' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Projects deployed', value: '12m' },
]
const footerNavigation = {
  solutions: [
    { name: 'Hosting', href: '#' },
    { name: 'Data Services', href: '#' },
    { name: 'Uptime Monitoring', href: '#' },
    { name: 'Enterprise Services', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Reference', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/soma.l.choudhury',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/thisissoma',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },

    {
      name: 'YouTube',
      href: 'https://www.youtube.com/Nitishnyc/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    // {
    //   name: 'Messaget',
    //   href: 'https://www.youtube.com/Nitishnyc/',
    //   icon: (props) => (
    //     <Link
    //       href="mailto:soma@Nitishnyc.com"
    //       className="flex items-center rounded-md bg-white py-[0.4375rem] px-2 pr-2  text-sm font-semibold shadow lg:pr-3"
    //       id="headlessui-tabs-tab-2"
    //       aria-selected="true"
    //       tabindex="0"
    //       data-headlessui-state="selected"
    //       aria-controls="headlessui-tabs-panel-4"
    //     >
    //       <img
    //         class="h-5 w-5 flex-none fill-sky-500  stroke-sky-500 text-gray-500 lg:h-8  lg:w-8"
    //         src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/7nNmS7JFpjU.png"
    //         alt=""
    //         height="16"
    //         width="16"
    //         fill="fill-sky-500"
    //       ></img>
    //       <span class="px-2 text-gray-500 hover:text-blue-500 lg:mx-2 lg:text-lg">
    //         Message
    //       </span>
    //     </Link>
    //   ),
    // },
  ],
}

export function Hero() {
  return (
    <div className="-mt-4 bg-white md:-mt-0">
      <main>
        <About />
        {/* <Services /> */}

        <Clients />
        <Contact />
      </main>
    </div>
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

export const Contact = () => {
  return (
    <div
      id="contact"
      className="mx-auto mt-6 max-w-7xl grid-cols-2 px-6 sm:mt-6 lg:grid lg:px-8 lg:pb-44 lg:pt-14 "
    >
      <div className="contact mx-auto max-w-3xl lg:mx-0 lg:max-w-xl lg:text-xl ">
        <h2 className="text-base font-semibold leading-8 text-blue-400">
          Contact
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          GET IN TOUCH
        </p>
        <p className="my-2 text-lg leading-8 text-gray-700 lg:text-2xl  lg:font-semibold lg:text-gray-700 ">
          Please reach out if you have any inquiries.
          <address className="contact-address lg:text-2xl">
            <Link
              href="mailto:inquire@Nitishnyc.com"
              className="font-semibold text-black hover:text-blue-500 "
            >
              inquire@Nitishnyc.com
            </Link>
            <br />
            <Link
              href="tel:+1 1(646)-588-9578"
              className="hover:text-blue-500 "
            >
              +1 1(646)588-9578
            </Link>
            <br />
            Toronto CA
          </address>
        </p>
      </div>
      <div
        id="social"
        className="flex-block mx-auto  my-14 max-w-3xl lg:my-[2%] lg:mx-0 lg:max-w-xl lg:text-xl  "
      >
        <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl md:my-4 lg:my-6 ">
          SOCIAL
        </p>
        <div className="justify-0center flex space-x-6 md:order-2 ">
          {footerNavigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-black hover:text-sky-500 lg:text-black"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon
                className="h-8 w-8 lg:h-14 lg:w-14"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

// export const Services = () => {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.5,
//       },
//     },
//   }

//   const item = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1 },
//   }
//   return (
//     <>
//       <div id="services" className="relative isolate mt-4">
//         <div className="max-w-9xl mx-auto items-center  justify-center bg-gray-50/50 px-6 px-6  pt-10 pb-24 pt-2 sm:pb-40 md:px-14 lg:flex">
//           <motion.div animate={{ x: 100 }} transition={{ delay: 1 }} />{' '}
//           <div className="flex-shrink-1 mx-auto mt-4 max-w-2xl lg:mx-0 lg:max-w-xl lg:pt-8 ">
//             <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl  lg:mt-10">
//               <h2 class="text-base font-semibold leading-7 text-blue-400 lg:text-xl ">
//                 Services
//               </h2>
//               GLOBAL PLATFORM FOCUS.
//             </h1>

//             <div className="mt-10 flex items-center gap-x-6">
//               <a
//                 href="#detailedExpertise"
//                 className=" bg-blue-500 px-3.5 py-2.5 text-xl  text-sm font-semibold text-white shadow-sm hover:bg-black hover:bg-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
//               >
//                 Get started
//               </a>
//               <a
//                 href="#detailedExpertise"
//                 className="text-xl  font-semibold leading-6 text-black "
//               >
//                 Learn More <span aria-hidden="true">→</span>
//               </a>
//             </div>
//           </div>
//           <div className="mx-auto mt-16 flex max-w-3xl flex-col sm:mt-24  lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
//             <div className="max-w-4xl flex-none  sm:max-w-7xl lg:max-w-none">
//               <motion.ul variants={container} initial="hidden" animate="show">
//                 {' '}
//                 <div className="flex flex-col gap-x-6 gap-y-6  lg:grid lg:grid-cols-2">
//                   {expertises.map((expertise) => {
//                     return (
//                       // <motion.li key={expertise.name} variants={item}>
//                       <a
//                         href="#detailedExpertise"
//                         key={expertise.name}
//                         className="pointer-events-auto relative z-10 flex items-center justify-center bg-white p-6 text-[0.8125rem] text-sm font-medium leading-5 text-gray-700 shadow-xl shadow-black/5 ring-2 ring-black
//                         duration-200 ease-out hover:bg-slate-50 hover:text-gray-800 hover:transition-colors lg:w-[23rem] "
//                       >
//                         <h1
//                           // href="#detailedExpertise"
//                           className="flex justify-center  text-center text-xl font-semibold leading-7 text-black  lg:text-2xl"
//                         >
//                           {expertise.name}
//                         </h1>
//                       </a>
//                       // </motion.li>
//                     )
//                   })}
//                 </div>{' '}
//               </motion.ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         id="detailedExpertise"
//         className="max-w-9xl mx-auto bg-gray-50 px-6  py-2 sm:mt-56 sm:px-6 md:px-8 lg:mt-6  lg:px-16"
//       >
//         <FadeInSection>
//           <div class=" mx-auto mt-20  px-4 sm:mt-24 lg:mt-32 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8">
//             <div
//               id="left"
//               class="relative col-span-5 col-start-1 row-start-1 -mt-10 xl:col-span-6"
//             >
//               <div className="mx-auto max-w-2xl text-center">
//                 <h2 className="text-left text-base font-semibold leading-7 text-blue-400   lg:text-xl ">
//                   Grow faster
//                 </h2>
//                 <h1 className="mt-2 text-left text-4xl font-bold tracking-tight text-black sm:text-6xl lg:mt-10">
//                   Everything you need to launch and develop your project.
//                 </h1>
//                 <p className="mt-6 text-left text-lg  leading-8 text-gray-600 lg:text-2xl lg:text-gray-600/90">
//                   <span className="pr-2 font-bold capitalize">
//                     New Business/ Brand/ Product Launches:
//                   </span>
//                   Over fifteen years of experience successfully designing,
//                   building, and launching new businesses, brands, and products.
//                   From concept to execution, bringing vision, leadership, and a
//                   deliberate/disciplined approach to new launches that result in
//                   recognition & growth.
//                 </p>
//               </div>
//             </div>

//             <div
//               id="rigth"
//               class="relative col-span-7 col-start-6 row-start-1 mt-4 xl:col-span-6  xl:col-start-7 "
//             >
//               <img
//                 src={NitishHeroImg2.src}
//                 alt="App screenshot"
//                 width={2432}
//                 height={1242}
//                 className=" aspect-[2400/1960]  rounded-md  bg-white/5 ring-1 ring-white/10 lg:w-full xl:aspect-[1013/960]"
//               />
//             </div>
//           </div>
//         </FadeInSection>

//         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none lg:px-24 lg:pb-24">
//           <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
//             {primaryFeatures.map((feature) => (
//               <div key={feature.name} className="flex flex-col">
//                 <dt className="text-base font-semibold leading-7 text-black lg:text-2xl ">
//                   <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-black">
//                     <feature.icon
//                       className="h-6 w-6 text-white"
//                       aria-hidden="true"
//                     />
//                   </div>
//                   {feature.name}
//                 </dt>
//                 <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600  lg:text-lg lg:text-gray-600/90 xl:text-2xl">
//                   <p className="flex-auto">{feature.description}</p>
//                 </dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </>
//   )
// }
