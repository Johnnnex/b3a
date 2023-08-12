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
        </div>
        <div className="flex items-center md:w-[20%] w-[70%] mx-auto justify-between">
            <a className="flex justify-between neumorphic items-center p-3 bg-[#00000090] hover:bg-black transition-[.5s] rounded-[50%]" href="https://instagram.com/blockfestafrica?igshid=MzRlODBiNWFlZA==">
              <Image src="/Images/instagram.svg" alt="logo" height={20} width={20} />
            </a>
            <a className="flex justify-between items-center p-3 bg-[#00000090] hover:bg-black transition-[.5s] rounded-[50%]" href="https://twitter.com/blockfestafrica?t=HrZZPme5kS-ml1nplc6NeQ&s=08" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/twt.svg" alt="logo" height={20} width={20} />
            </a>
            <a className="flex justify-between items-center p-3 bg-[#00000090] hover:bg-black transition-[.5s] rounded-[50%]" href="https://www.linkedin.com/company/blockfest-africa/" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/in.svg" alt="logo" height={20} width={20} />
            </a>
            <a className="flex justify-between items-center p-3 bg-[#00000090] hover:bg-black transition-[.5s] rounded-[50%]" href="https://www.youtube.com/@BLOCKFESTAFRICA" target="_blank" rel="noopener noreferrer">
              <Image src="/Images/utube.svg" alt="logo" height={20} width={25} />
            </a>
          </div>
        <div className="md:w-[40%]"></div>
      </div>
    </footer>
  )
}

export default Footer
