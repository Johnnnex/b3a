import React, { useState, useEffect, useCallback} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const [partner, setPartner] = useState();
  const [about, setAbout] = useState();
  const [speaker, setSpeaker] = useState();
  const [schedule, setSchedule] = useState();
  const [faq, setFaq] = useState();
  const router = useRouter();


  const setStates = useCallback(() => {
    if(router.asPath == "/#about") {
      setAbout("active");
      setPartner("");
      setSpeaker("");
      setSchedule("");
      setFaq("");
    }
    else if (router.asPath == "/#speakers") {
      setSpeaker("active");
      setAbout("");
      setPartner("");
      setSchedule("");
      setFaq("");
    }
    else if (router.asPath == "/#partners") {
      setPartner("");
      setSpeaker("");
      setAbout("");
      setSchedule("");
      setFaq("");
    }
    else if (router.asPath == "/#schedule") {
      setSchedule("active");
      setPartner("");
      setAbout("");
      setSpeaker("");
      setFaq("");
    }
    else if (router.asPath == "/#FAQ") {
      setFaq("active");
      setSchedule("");
      setPartner("");
      setAbout("");
      setSpeaker("");
    }
  }, [router.asPath]);

  useEffect(() =>{
    setStates();
  }, [setStates]);
  return (
    <footer className="w-full py-8">
      <div className="flex md:items-center md:pl-8 flex-col md:flex-row gap-9 md:gap-0">
        <div className="md:w-[40%] flex flex-col pl-5 md:pl-0 md:justify-center gap-4">
            <div className="">
                <Link href="#">
                    <Image className="cursor-pointer" src="/Images/logo.svg" alt="logo" height={50} width={100} />
                </Link>
            </div>
          <div className="flex md:w-[45%] items-center w-[50%] justify-between">
            <a href="https://instagram.com/blockfestafrica?igshid=MzRlODBiNWFlZA==">
              <Image src="/Images/ig.svg" alt="logo" height={20} width={20} />
            </a>
            <a href="https://twitter.com/blockfestafrica?t=HrZZPme5kS-ml1nplc6NeQ&s=08" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/twitter.svg" alt="logo" height={20} width={20} />
            </a>
            <a href="https://www.linkedin.com/company/blockfest-africa/" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/linkedin.svg" alt="logo" height={20} width={20} />
            </a>
            <a href="https://www.youtube.com/@BLOCKFESTAFRICA" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/youtube.svg" alt="logo" height={20} width={25} />
            </a>
          </div>
        </div>
        <nav className="w-[70%] pl-5 md:pl-0">
          <ul className="flex flex-col md:flex-row justify-evenly font-poppins text-white">
            <Link href="#about">
              <li className={`${about} cursor-pointer hover:text-[#1A63E4] transition-[.5s]`}>About</li>
            </Link>
            <Link href="#speakers">
              <li className={`${speaker} cursor-pointer hover:text-[#1A63E4] transition-[.5s]`}>Speakers</li>
            </Link>
            <Link href="#patners" className="cursor-pointer">
              <li className={`${partner} cursor-pointer hover:text-[#1A63E4] transition-[.5s]`}>Partners</li>
            </Link>
            <Link href="#schedule" className="cursor-pointer">
              <li className={`${schedule} cursor-pointer hover:text-[#1A63E4] transition-[.5s]`}>Event Schedule</li>
            </Link>
            <Link href="#FAQ" className="cursor-pointer">
              <li className={`${faq} cursor-pointer hover:text-[#1A63E4] transition-[.5s]`}>FAQ</li>
            </Link>
          </ul>
        </nav>
        <div className="md:w-[40%]"></div>
      </div>
    </footer>
  )
}

export default Footer
