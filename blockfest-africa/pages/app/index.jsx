import Timer from '@/reusable component/Timer'
import React from 'react'

const Index = () => {
  return (
    <section className=" bg-[#050E2B] h-[100vh] flex flex-col justify-center">
        <div className="">
            <h1 className="text-center text-[#fff] font-poppins font-[700] text-[2rem]">BUIDL•BRIDGE•BECOME</h1>
            <div className="text-center">
                <small className="text-[#fff] font-poppins text-center">October 21, 2023. Lagos, Nigeria</small>
            </div>
            <div className="text-center font-poppins">
                <button className=" px-7 py-2 bg-[#1A63E4] rounded-[5px]">Partner wih us</button>
            </div>
            <Timer />
        </div>
    </section>
  )
}

export default Index
