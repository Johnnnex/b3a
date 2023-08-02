import Timer from '@/reusable component/Timer'
import React from 'react'

const Index = () => {
  return (
    <>
        <section className=" bg-[#050E2B] h-[100vh] flex flex-col justify-center">
            <div className="h-[56%] flex flex-col justify-evenly">
                <div className="w-fit mx-auto">
                    <h1 text-data="BUIDL•BRIDGE•BECOME" className="text-[#fff] font-poppins font-[700] text-[2rem]">BUIDL•BRIDGE•BECOME</h1>
                </div>
                <div className="text-center">
                    <small className="text-[#fff] font-poppins text-center">October 21, 2023. Lagos, Nigeria</small>
                </div>
                <div className="text-center font-poppins">
                    <button className=" px-7 py-2 bg-[#1A63E4] text-white rounded-[5px]">Partner wih us</button>
                </div>
                <Timer />
            </div>
        </section>
        <section className="text-white pt-[2rem] pb-[4rem]">
            <div className="flex w-[80%] mx-auto justify-between items-center font-poppins">
                <div className="w-[28%]">
                    <h3 className="font-[600] text-[2rem]">About BLOCKF3ST</h3>
                </div>
                <div className="w-[60%] space-y-5">
                    <p className="">
                    BLOCKF3ST is an annual developers, creatives, digital creators, traders festival that caters to the Web3 community. <br /><br />

                    Our large scale all-inclusive fest comprises of panel sessions, networking forums, workshops, and pitches. Focusing on subject matters regrading the Crypto ecosystem, Fintech industries, developers education and cross fertilization of corporate careers into Web3. <br /><br />
                    WHAT’S MORE? We’re set to not only enlighten and network with the already bustling Web3 Experts and enthusiats but also posture as the creche for Entry level developers, budding designers, ambitious digital creators and marketers in affiliations with our cooperate organizations and community partners. <br /><br />

                    The flagship event is set to hold in the city that never sleeps-LAGOS,NIGERIA. <br /><br />

                    This is the SUPER BOWL of WEB3! <br />
                    </p>
                    <div className="font-poppins">
                        <button className=" px-7 py-2 bg-[#1A63E4] text-white rounded-[5px]">Partner wih us</button>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Index
