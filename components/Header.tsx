'use client'

import React from 'react'
import { useEffect, useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import Link from 'next/link';

interface HeaderProps {
  page: string;
}

const Header: React.FC<HeaderProps> = ({ page }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleCloseMenu(): void {
    const menu = document.getElementById('menu')
    const panel = document.getElementById('menu-panel')
    if (menu && panel) {
      menu.classList.add('fade-out-element');
      panel.classList.add('minimize-width');
      setTimeout(function() {
        setMobileMenuOpen(false)
      }, 250);
    }
  }

  function setUnderline(page: string): void{
    const element = document.getElementById(page);
    if (element) {
      element.classList.add('underline', 'underline-offset-8');
    }
  }
  
  useEffect(() => {
    setUnderline(page)
  }, [page])


  return (
    <header className="on-load-animation-250">
      <nav className="mx-auto flex max-w-7xl items-center gap-[75px] p-6 md:px-8 justify-between">

        <Link href="./" className="flex items-start space-x-3 rtl:space-x-reverse">
          {/* <FontAwesomeIcon icon={faStar} size="3x"/> */}
        </Link>
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden md:flex md:gap-x-12">
          <Popover className="relative">
            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-black shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
            </PopoverPanel>
          </Popover>
          <Link id="home" href="../" className="header-text tracking-widest text-lg font-semibold px-5 hover:underline hover:underline-offset-8">HOME</Link>
          <Link id="projects" href="../projects" className="header-text tracking-widest text-lg font-semibold px-5 hover:underline hover:underline-offset-8">PROJECTS</Link>
          <Link id="about" href="../about" className="header-text tracking-widest text-lg font-semibold px-5 hover:underline hover:underline-offset-8">ABOUT ME</Link>
        
        </PopoverGroup>
      </nav>


      <Dialog id="menu" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden fade-in-element">
        <div className="fixed inset-0 z-50" />
        <DialogPanel id="menu-panel" className="fixed expand-width inset-y-0 right-0 z-50 overflow-y-auto bg-black p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex justify-end align-top">

            <button
              type="button"
              onClick={() => handleCloseMenu()}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span id="menu-icon" className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-40 mx-5 flex-grow flex justify-start">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="tracking-widest space-y-2 py-6">
                <Link id="home-mobile" href="/" className="header-text text-white -mx-3 block rounded-lg px-3 py-2  text-xl font-semibold hover:underline hover:underline-offset-8">HOME</Link>
                <Link id="projects-mobile" href="/projects" className="header-text text-white -mx-3 block rounded-lg px-3 py-2  text-xl font-semibold hover:underline hover:underline-offset-8">PROJECTS</Link>
                <Link id="about-mobile" href="/about" className="header-text text-white -mx-3 block rounded-lg px-3 py-2  text-xl font-semibold hover:underline hover:underline-offset-8">ABOUT ME</Link>
              </div>
            </div>

          </div>

        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header