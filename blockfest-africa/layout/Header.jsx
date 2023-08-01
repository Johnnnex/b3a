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
    <header ref={header} className='bg-[#1A63E4] fixed w-full py-4 z-[3]'>
      <div className="flex pl-7 items-center">
        <div className="w-[40%]">
          <Image src="/Images/logo.svg" alt="logo" height={1} width={130} />
        </div>
        <nav className="w-[50%] mainNav" ref={navRef}>
          <ul className="flex flex-col md:flex-row text-center md:text-left justify-evenly font-poppins text-white">
            <li className={`${home}`}>
              <Link href="#">
                Home
              </Link>
            </li>
            <li className={`${about}`}>
              <Link href="#about">
                About
              </Link>
            </li>
            <li className={`${speaker}`}>
              <Link href="#speakers">
                Speakers
              </Link>
            </li>
            <li className={`${testimony}`}>
              <Link href="#testimonies">
                Testimonies
              </Link>
            </li>
          </ul>
        </nav>
        <div className="w-[40%]"></div>
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
