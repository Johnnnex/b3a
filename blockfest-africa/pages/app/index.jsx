import React from 'react'
import Timer from '@/reusable component/Timer'
import { PureImgLoader, ImgLoader } from "@/reusable component/img-loaders"
import FAQ from '@/reusable component/FAQ'


const Index = () => {
  return (
    <>
        <section className="px-3 md:px-0 bg-[#050E2B] h-[100vh] flex flex-col justify-center">
            <div className="h-[56%] flex flex-col justify-evenly">
                <div className="w-fit mx-auto">
                    <h1 text-data="BUIDL•BRIDGE•BECOME" className="text-[#fff] hidden md:block wow fadeIn font-poppins font-[700] text-[2rem]">BUIDL•BRIDGE•BECOME</h1>
                    <h2 className="text-[#fff] md:hidden wow fadeIn font-poppins font-[700] text-[2rem]">BUIDL •BRIDGE •BECOME</h2>
                </div>
                <div className="md:text-center">
                    <small className="text-[#fff] text-[1rem] wow fadeIn font-poppins">October 27th-28th, 2023. Lagos, Nigeria</small>
                </div>
                <div className="md:text-center wow fadeIn font-poppins">
                    <a href="https://bit.ly/Sponsor-Blockfest-2023" target="_blank" rel="noopener noreferrer">
                        <button className=" px-7 py-2 bg-[#1A63E4] text-white rounded-[5px]">Become a Sponsor</button>
                    </a>
                </div>
                <Timer />
            </div>
        </section>
        <section id="about" className="px-3 md:px-0 text-white md:pt-[5rem] pb-[4rem]">
            <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:w-[80%] mx-auto md:justify-between md:items-center font-poppins">
                <div className="md:w-[28%]">
                    <h3 className="font-[600] wow fadeIn text-[2rem]">About BLOCKF3ST</h3>
                </div>
                <div className="md:w-[60%] space-y-5">
                    <p className="wow fadeInUp">
                    BLOCKF3ST is an annual developers, creatives, digital creators, traders festival that caters to the Web3 community. <br /><br />

                    Our large scale all-inclusive fest comprises of panel sessions, networking forums, workshops, and pitches. Focusing on subject matters regrading the Crypto ecosystem, Fintech industries, developers education and cross fertilization of corporate careers into Web3. <br /><br />

                    WHAT’S MORE? We’re set to not only enlighten and network with the already bustling Web3 Experts and enthusiats but also posture as the creche for Entry level developers, budding designers, ambitious digital creators and marketers in affiliations with our cooperate organizations and community partners. <br /><br />

                    The flagship event is set to hold in the city that never sleeps-LAGOS,NIGERIA. <br /><br />

                    This is the SUPER BOWL of WEB3! <br />
                    </p>
                    <div className="font-poppins">
                        <a href="https://bit.ly/Sponsor-Blockfest-2023" target="_blank" rel="noopener noreferrer">
                            <button className="wow fadeIn px-7 py-2 bg-[#1A63E4] text-white rounded-[5px]">Partner wih us</button>
                        </a>
                </div>
                </div>
            </div>
        </section>
        {/* <section className="px-4 md:px-0 py-[3.5rem]" id="speakers">
            <h2 className="font-poppins wow fadeIn text-center font-[600] text-[2rem] mb-[4rem] text-white">Meet Our Speakers</h2>
            <div className="flex flex-wrap md:w-[80%] mx-auto">
                <div className="w-[20rem] p-2 wow fadeIn mx-auto mb-7">
                    <div className="rounded-[1rem] overflow-hidden">
                    <ImgLoader source="/Images/sayrah.jpg" altText="speaker" width={300} />
                    </div>
                    <p className=" font-poppins text-white font-[900] mt-[1rem] mb-[0.3rem]">SARA IDAHOSA</p>
                    <small className="font-poppins text-white">Founder Women In Defi</small>
                </div>
                <div className="w-[20rem] p-2 wow fadeIn mx-auto mb-7">
                    <div className="rounded-[1rem] overflow-hidden">
                    <ImgLoader source="/Images/xeus.jpg" width={300} altText="speaker" />
                    </div>
                    <p className=" font-poppins text-white font-[900] mt-[1rem] mb-[0.3rem]">SAMUEL OLADOKUN</p>
                    <small className="font-poppins text-white">Founder, NIRVANA Academy & Labs </small>
                </div>
                <div className="w-[20rem] wow p-2 fadeIn mx-auto mb-7">
                    <div className="rounded-[1rem] overflow-hidden">
                    <ImgLoader source="/Images/idris.jpg" altText="speaker" width={300} />
                    </div>
                    <p className=" font-poppins text-white font-[900] mt-[1rem] mb-[0.3rem]">IDRIS OLUBISI</p>
                    <small className="font-poppins text-white">Developer Advocate, Axelar</small>
                </div>
            </div>
        </section> */}
        <FAQ />
    </>
  )
}

export default Index
