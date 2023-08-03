import React, { useRef, useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Link from 'next/link'

const Header = () => {
  const header = useRef()
  const router = useRouter()
  const navRef = useRef();
	const burgerRef = useRef();
  const [home, setHome] = useState()
  const [about, setAbout] = useState()
  const [speaker, setSpeaker] = useState()
  const [testimony, setTestimony] = useState()

  const setStates = useCallback(() => {
    if(router.asPath == "/" || router.asPath == "/#") {
      setHome("active")
      setAbout("")
      setSpeaker("")
      setTestimony("")
    }
    else if (router.asPath == "/#about") {
      setAbout("active")
      setHome("")
      setSpeaker("")
      setTestimony("")
    }
    else if (router.asPath == "/#speakers") {
      setAbout("")
      setHome("")
      setSpeaker("active")
      setTestimony("")
    }
    else if (router.asPath == "/#testimonies") {
      setAbout("")
      setHome("")
      setSpeaker("")
      setTestimony("active")
    }
  }, [router.asPath])

	const handleClick = () => {
		navRef.current.classList.toggle("showNav");
		burgerRef.current.classList.toggle("burgerNav");
	};
  useEffect(() =>{
      window.addEventListener("scroll", () => {
          header.current.classList.toggle("header-sticky", window.scrollY > 0)
      })
      setStates()
  }, [setStates])
  return (
    <header ref={header} className='bg-[#1a63e41a] fixed w-full py-3 z-[3]'>
      <div className="flex px-7 justify-between items-center">
        <div className="w-[15%]">
          <Image src="/Images/logo.svg" alt="logo" height={1} width={130} />
        </div>
        <nav className="w-[80%] mainNav" ref={navRef}>
          <div className="flex items-center justify-between">
            <ul className="flex w-[60%] flex-col md:flex-row text-center md:text-left justify-between font-poppins text-white">
              <li className={`${home} nav-list py-1 px-3`}>
                <Link href="#">
                  About
                </Link>
              </li>
              <li className={`${about} nav-list py-1 px-3`}>
                <Link href="#about">
                  Speakers
                </Link>
              </li>
              <li className={`${speaker} nav-list py-1 px-3`}>
                <Link href="#speakers">
                  Patners
                </Link>
              </li>
              <li className={`${testimony} nav-list py-1 px-3`}>
                <Link href="#testimonies">
                  Event Schedule
                </Link>
              </li>
              <li className={`${testimony} nav-list py-1 px-3`}>
                <Link href="#testimonies">
                  FAQ
                </Link>
              </li>
            </ul>
            <div className="w-[20%] font-poppins">
              <button className=" px-7 py-2 bg-[#1BBE9F] rounded-[5px]">Register now</button>
            </div>
          </div>
        </nav>
      </div>
      <div
				onClick={handleClick}
				ref={burgerRef}
				className=" pr-4 space-y-1 block md:hidden z-[999] fixed right-0"
			>
				<svg
					width="21"
					className=""
					height="2"
					viewBox="0 0 21 2"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.38647 1H19.3865"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<svg
					width="21"
					height="2"
					viewBox="0 0 21 2"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.38647 1H19.3865"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<svg
					width="21"
					height="2"
					viewBox="0 0 21 2"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.38647 1H19.3865"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
    </header>
  )
}

export default Header
