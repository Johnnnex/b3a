import React, { useEffect, useCallback, useState } from 'react'

const Timer = () => {
    const [dy, setDy] = useState()
    const [hrs, setHrs] = useState()
    const [min, setMin] = useState()
    const [sec, setSec] = useState()
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
    <section className="text-white wow fadeIn bg-gradient-to-r from-[#FDAD20] via-[#7C0202A8] to-[#7C0202A8] rounded-2xl mb-0 absolute bottom-0 md:w-[60%] mx-[1%] w-[90%] md:mx-[20%] font-poppins py-[1.5rem] translate-y-[40%]">
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
