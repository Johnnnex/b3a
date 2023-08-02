import React, { useEffect, useCallback, useState } from 'react'

const Timer = () => {
    const [dy, setDy] = useState("00")
    const [hrs, setHrs] = useState("00")
    const [min, setMin] = useState("00")
    const [sec, setSec] = useState("00")
    const countDown = useCallback(() => {
        const eventTime = new Date('August 18, 2023 18:00:00').getTime()
        const currentTime = new Date().getTime()
        const gap = eventTime - currentTime
        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24
        const textDay = Math.floor(gap / day)
        const textHour = Math.floor((gap % day) / hour)
        const textMinute = Math.floor((gap % hour) / minute)
        const textSecond = Math.floor((gap % minute) / second)
      
        
        setDy(textDay)
        setHrs(textHour)
        setMin(textMinute)
        setSec(textSecond)
    }, [])
    useEffect(() => {
        const countInt = () => setInterval(countDown, 1000)
        countInt()
        return () => {
            clearInterval(countInt)
        }
      }, [countDown])
  return (
    <section className="text-[#ffffff99] wow fadeIn md:w-[60%] mx-[1%] w-[90%] md:mx-[20%] font-poppins py-[1.5rem]">
        <div className="flex justify-evenly items-center md:w-[70%] mx-auto">
        <p className="font-[700]">
            {dy} <br />
            <small className="font-[100]">Day(s)</small>
        </p> :
        <p className="font-[700]">
            {hrs} <br />
            <small className="font-[100]">Hours</small>
        </p> :
        <p className="font-[700]">
            {min} <br />
            <small className="font-[100]">Minutes</small>
        </p> :
        <p className="font-[700]">
            {sec} <br />
            <small className="font-[100]">Seconds</small>
        </p> 
        </div>
    </section>
  )
}

export default Timer
