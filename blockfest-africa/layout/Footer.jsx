import React, { useState, useEffect, useCallback} from 'react'
import {useRouter} from 'next/router';
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
  const [partner, setPartner] = useState()
  const [about, setAbout] = useState()
  const [speaker, setSpeaker] = useState()
  const [schedule, setSchedule] = useState()
  const router = useRouter()


  const setStates = useCallback(() => {
    if(router.asPath == "/#about") {
      setAbout("active")
      setPartner("")
      setSpeaker("")
      setSchedule("")
    }
    else if (router.asPath == "/#speakers") {
      setSpeaker("active")
      setAbout("")
      setPartner("")
      setSchedule("")
    }
    else if (router.asPath == "/#partners") {
      setPartner("active")
      setSpeaker("")
      setAbout("")
      setSchedule("")
    }
    else if (router.asPath == "/#schedule") {
      setSchedule("active")
      setPartner("")
      setAbout("")
      setSpeaker("")
    }
  }, [router.asPath])

  useEffect(() =>{
    setStates()
  }, [setStates])
  return (
    <footer className="w-full py-8">
      <div className="flex md:items-center md:pl-8 flex-col md:flex-row gap-9 md:gap-0">
        <div className="w-[40%] flex flex-col pl-5 md:pl-0 md:justify-center gap-4">
          <div className="flex md:w-[20%] w-[50%] justify-between">
            <a href="tel:+2349072715975">
              <Image src="/Images/phone.svg" alt="logo" height={1} width={30} />
            </a>
            <a href="https://www.linkedin.com/in/umeh-chinonye-maryjane" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/linkedin.svg" alt="logo" height={1} width={30} />
            </a>
          </div>
        </div>
        <nav className="w-[70%] pl-5 md:pl-0">
          <ul className="flex flex-col md:flex-row justify-evenly font-poppins text-white">
            <Link href="#about">
              <li className={home}>About</li>
            </Link>
            <Link href="#speakers">
              <li className={about}>Speakers</li>
            </Link>
            <Link href="#patners">
              <li className={speaker}>Patners</li>
            </Link>
            <Link href="#schedule">
              <li className={testimony}>Event Schedule</li>
            </Link>
            <Link href="#FAQ">
              <li className={testimony}>FAQ</li>
            </Link>
          </ul>
        </nav>
        <div className="w-[40%]"></div>
      </div>
    </footer>
  )
}

export default Footer
