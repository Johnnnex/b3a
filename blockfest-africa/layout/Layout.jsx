import React, { useRef } from 'react'
import Image from 'next/image'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  const body = useRef()
    const moreInfo = useRef()
    const showMoreInfo = () => {
		moreInfo.current.classList.remove("scale-0", "translate-y-[-30rem]");
		body.current.classList.add("blur-[10px]", "pointer-events-none");
	};
	const showLessInfo = () => {
		moreInfo.current.classList.add("scale-0", "translate-y-[-30rem]");
		body.current.classList.remove(
			"h-[70vh]",
			"overflow-hidden",
			"blur-[10px]",
			"pointer-events-none",
		);
	};
  return (
    <>
        <Header comingSoon={showMoreInfo}/>
        <section ref={body}>
          {children}
        </section>
        <section ref={moreInfo} className="transition-[.5s] scale-0 translate-y-[-30rem] text-white border-[#808080] top-[30vh] fixed rounded-[10px] border md:w-[30%] w-[90%] md:mx-[35%] mx-[5%] bxshadw">
            <div className=" translate-y-[-50%] flex items-center justify-center mx-auto w-fit rounded-[50%] p-3 bg-[#1a63e4]">
                <Image src="/Images/load.gif" height={40} width={40} alt="gif" />
            </div>
            <h3 className=" font-poppins text-[2rem] font-[600] text-center">Coming Soon!</h3>
            <p className=" font-poppins text-center">Something Big is Brewing!</p>
            <div className="w-[90%] mt-4 mb-3 mx-auto">
                <button onClick={showLessInfo} className="w-full py-2 font-poppins bg-[#1A63E4] bxshadw-bl rounded-[5px]">OK</button>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Layout
