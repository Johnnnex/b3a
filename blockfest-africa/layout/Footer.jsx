import React, { useState, useEffect, useCallback} from 'react'
import {useRouter} from 'next/router';
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
  const [home, setHome] = useState()
  const [about, setAbout] = useState()
  const [speaker, setSpeaker] = useState()
  const [testimony, setTestimony] = useState()
  const router = useRouter()


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

  useEffect(() =>{
    setStates()
  }, [setStates])
  return (
    <footer className="w-full py-8 bg-[#242222]">
      <div className="flex md:items-center md:pl-8 flex-col md:flex-row gap-9 md:gap-0">
        <div className="w-[40%] flex flex-col pl-5 md:pl-0 md:justify-center gap-4">
          <p className="font-eScript text-[#FDAD20] text-[2rem]">Alchemy</p>
          <div className="flex md:w-[20%] w-[50%] justify-between">
            <a href="tel:+2349072715975">
              <Image src="/Images/phone.svg" alt="logo" height={1} width={30} />
            </a>
            <a href="https://www.linkedin.com/in/umeh-chinonye-maryjane" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/linkedin.svg" alt="logo" height={1} width={30} />
            </a>
          </div>
        </div>
        <nav className="w-[50%] pl-5 md:pl-0">
          <ul className="flex flex-col md:flex-row justify-evenly font-poppins text-white">
            <Link href="#">
              <li className={home}>Home</li>
            </Link>
            <Link href="#about">
              <li className={about}>About</li>
            </Link>
            <Link href="#speakers">
              <li className={speaker}>Speakers</li>
            </Link>
            <Link href="#testimonies">
              <li className={testimony}>Testimonies</li>
            </Link>
          </ul>
        </nav>
        <div className="w-[40%]"></div>
      </div>
    </footer>
  )
}

export default Footer
