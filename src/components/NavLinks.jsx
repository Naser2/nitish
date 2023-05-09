import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { DesktopMenuIcon } from './Header'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return [
    ['About', '/about'],
    ['Videos', '/videos'],
    ['Jokes', '/jokes'],
    ['Albums', '/albums'],
    ['Calendar', '/calendar'],
    // ['Pricing', '#pricing'],
    // ['Contact', '/#contact'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className={clsx(
        ' transition-colors delay-150 hover:py-1 hover:text-white hover:delay-[0ms]'
      )}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="max-w[-2rem]  inset-0 bg-gray-900/50 "
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span class="css-4xd708">
        <span
          className={clsx(
            hoveredIndex === index && ' !color-teme',
            'relative z-10  !text-3xl  !font-bold uppercase !text-white dark:text-white  sm:text-6xl'
          )}
        >
          {label}
        </span>
        {/* <span class="css-lmv9yd">VIDEOS</span> */}
        {/* <span id="nav-shadow" className="">
          <div
            class=""
            style={{
              borderTopWidth: '2px',
              transform: 'scaleX(0)',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.68, 0.06)',
              width: '47.5859px',
            }}
          ></div>
        </span> */}
      </span>
    </Link>
  ))
}

export function FooterNavLinks({ color }) {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return [
    ['ABOUT', '/about'],
    ['VIDEOS', '/videos'],
    ['Jokes', '/jokes'],
    ['Albums', '/albums'],
    ['Calendar', '/calendar'],
    // ['Pricing', '#pricing'],
    // ['Contact', '#contact'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className={clsx(
        color ? color : 'dark:text-white  dark:text-gray-100',
        'relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm transition-colors delay-150 hover:text-yellow-500 hover:delay-[0ms]'
      )}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gray-700/80"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span class="css-4xd708">
        <span className={clsx(color ? color : 'relative  z-10 !text-white ')}>
          {label}
        </span>

        {/* <span class="css-lmv9yd">VIDEOS</span> */}
        <span class="css-rk7ym5">
          <div
            class="css-mzw0dv"
            style={{
              borderTopWidth: '2px',
              transform: 'scaleX(0)',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.68, 0.06)',
              width: '47.5859px',
            }}
          ></div>
        </span>
      </span>
    </Link>
  ))
}
