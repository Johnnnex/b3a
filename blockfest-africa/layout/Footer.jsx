import React, { useState, useEffect, useCallback} from 'react'
import {useRouter} from 'next/router';
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
  const [partner, setPartner] = useState()
  const [about, setAbout] = useState()
  const [speaker, setSpeaker] = useState()
  const [schedule, setSchedule] = useState()
  const [faq, setFaq] = useState()
  const router = useRouter()


  const setStates = useCallback(() => {
    if(router.asPath == "/#about") {
      setAbout("active")
      setPartner("")
      setSpeaker("")
      setSchedule("")
      setFaq("")
    }
    else if (router.asPath == "/#speakers") {
      setSpeaker("active")
      setAbout("")
      setPartner("")
      setSchedule("")
      setFaq("")
    }
    else if (router.asPath == "/#partners") {
      setPartner("")
      setSpeaker("")
      setAbout("")
      setSchedule("")
      setFaq("")
    }
    else if (router.asPath == "/#schedule") {
      setSchedule("active")
      setPartner("")
      setAbout("")
      setSpeaker("")
      setFaq("")
    }
    else if (router.asPath == "/#FAQ") {
      setFaq("active")
      setSchedule("")
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
          <Image src="/Images/logo.svg" alt="logo" height={1} width={100} />
          <div className="flex md:w-[45%] items-center w-[50%] justify-between">
            <a href="#">
              <Image src="/Images/ig.svg" alt="logo" height={1} width={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/twitter.svg" alt="logo" height={1} width={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/linkedin.svg" alt="logo" height={1} width={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/youtube.svg" alt="logo" height={1} width={25} />
            </a>
          </div>
        </div>
        <nav className="w-[70%] pl-5 md:pl-0">
          <ul className="flex flex-col md:flex-row justify-evenly font-poppins text-white">
            <Link href="#about">
              <li className={about}>About</li>
            </Link>
            <Link href="#speakers">
              <li className={speaker}>Speakers</li>
            </Link>
            <Link href="#patners">
              <li className={partner}>Patners</li>
            </Link>
            <Link href="#schedule">
              <li className={schedule}>Event Schedule</li>
            </Link>
            <Link href="#FAQ">
              <li className={faq}>FAQ</li>
            </Link>
          </ul>
        </nav>
        <div className="w-[40%]"></div>
      </div>
    </footer>
  )
}

export default Footer
