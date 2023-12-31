import React, { useRef, useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Link from 'next/link'

const Header = ({comingSoon}) => {
  const header = useRef()
  const router = useRouter()
  const navRef = useRef();
	const burgerRef = useRef();
  const [partner, setPatner] = useState()
  const [about, setAbout] = useState()
  const [speaker, setSpeaker] = useState()
  const [schedule, setSchedule] = useState()
  const [faq, setFaq] = useState()

  const removeNav = () => {
    navRef.current.classList.remove("showNav");
		burgerRef.current.classList.remove("burgerNav");
  }
  const setStates = useCallback(() => {
    if(router.asPath == "/#about") {
      setAbout("active")
      setPatner("")
      setSpeaker("")
      setSchedule("")
      setFaq("")
      removeNav()
    }
    else if (router.asPath == "/#speakers") {
      setSpeaker("active")
      setAbout("")
      setPatner("")
      setSchedule("")
      setFaq("")
      removeNav()
    }
    else if (router.asPath == "/#patners") {
      setPatner("active")
      setAbout("")
      setSpeaker("")
      setSchedule("")
      setFaq("")
      removeNav()
    }
    else if (router.asPath == "/#schedule") {
      setSchedule("active")
      setAbout("")
      setPatner("")
      setSpeaker("")
      setFaq("")
      removeNav()
    }
    else if (router.asPath == "/#FAQ") {
      setFaq("active")
      setAbout("")
      setPatner("")
      setSpeaker("")
      setSchedule("")
      removeNav()
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
  const dblFnc = () => {
    removeNav()
    comingSoon()
  }
  return (
    <header ref={header} className='md:bg-[#1a63e41a] header-nav fixed w-full py-3 z-[3] items-center flex'>
      <div className="flex md:px-7 flex-1 px-2 justify-between items-center">
        <div className="md:w-[15%] w-[50%]">
          <Link href="#">
            <Image className="cursor-pointer" src="/Images/logo.svg" alt="logo" height={50} width={130} />
          </Link>
        </div>
        <nav className="w-[80%] mainNav" ref={navRef}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <ul className="flex w-[60%] flex-col md:flex-row text-center md:text-left justify-between font-poppins text-white">
              <li className={`${about} nav-list py-1 px-3`}>
                <Link href="#about">
                  About
                </Link>
              </li>
              <li className={`${speaker} nav-list py-1 px-3`}>
                <Link href="#speakers">
                  Speakers
                </Link>
              </li>
              <li className={`${partner} nav-list py-1 px-3`}>
                <Link href="#patners">
                  Partners
                </Link>
              </li>
              <li className={`${schedule} nav-list py-1 px-3`}>
                <Link href="#schedule">
                  Event Schedule
                </Link>
              </li>
              <li className={`${faq} nav-list py-1 px-3`}>
                <Link href="#FAQ">
                  FAQ
                </Link>
              </li>
            </ul>
            <div className="pr-[2vw] flex-1 text-right font-poppins">
              <button onClick={dblFnc} className=" px-7 py-2 bg-[#1BBE9F] bxshadw-grn transition-[.5s] text-white rounded-[5px]">Register now</button>
            </div>
          </div>
        </nav>
      </div>
      <div
				onClick={handleClick}
				ref={burgerRef}
				className=" pr-4 space-y-1  md:hidden z-[999]"
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
