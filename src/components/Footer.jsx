import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logo, Logomark } from '@/components/Logo'
import { FooterNavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'
import clsx from 'clsx'
import { Links, SocialLinks } from './socialLinks'
import { CommonSocialLinks } from './CommonSocial'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer({ BG }) {
  return (
    <footer
      className={clsx(
        BG && BG,
        'overflow-hidden py-6  dark:bg-black lg:pt-14 '
      )}
    >
      {/* <div
        id="link"
        className="flex items-center justify-center overflow-x-scroll py-6 lg:hidden lg:px-6"
      >
        <CommonSocialLinks
          color={'!text-white relative z-10 text-xl text-center px-3 '}
        />
      </div> */}
      <div>
        <div className="mx-auto -mt-24 flex max-w-7xl flex-col items-start justify-between gap-y-12  overflow-hidden  px-6 px-4 pb-6 sm:px-6 lg:flex-row lg:items-center lg:py-16 lg:px-8">
          <div>
            <div className="mx-auto flex max-w-7xl items-center px-4 text-gray-900 sm:px-6 lg:px-8">
              {/* <Logomark className="h-10 w-10 flex-none fill-cyan-500" /> */}
              <div className="ml-4">
                <div
                  href="/"
                  className="font-semibold hover:text-blue-500 dark:!text-white lg:ml-20 lg:text-2xl "
                ></div>
              </div>
            </div>
          </div>
          {/* <nav className="inline-flex hidden justify-center gap-8  overflow-x-scroll px-[5%]  lg:mt-11 lg:flex">
            <CommonSocialLinks
              color={'!text-white relative z-10 text-xl text-center px-3 '}
            />
          </nav> */}
        </div>
        <div className="flex max-w-none flex-col items-center justify-center overflow-x-scroll border-t border-gray-200 px-4 pt-8 pb-12 dark:border-black sm:px-6 md:flex-row-reverse md:justify-between md:pt-6 lg:px-[14%] lg:px-8">
          <nav className="mx-auto  flex max-w-7xl items-center justify-center  gap-8 overflow-x-scroll  py-6 lg:mt-11 lg:hidden ">
            <FooterNavLinks
              color={'text-white relative z-10 text-xl text-center px-2 '}
            />
          </nav>

          <div className="mx-auto flex max-w-7xl items-center px-4 text-gray-900 sm:px-6 lg:py-6 lg:px-8">
            {' '}
            <p className="mt-6 justify-center text-sm text-gray-500 md:mt-0 lg:text-xl ">
              Nitish &copy; Copyright {new Date().getFullYear()}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
