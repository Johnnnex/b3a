import Image from "next/image"
import { useState } from "react"

export const ImgLoader = ({source, width, altText}) => {
    const [loader, setLoader] = useState(true)
    setTimeout(()=> {
        setLoader(false)
    }, 3000)
    return (
        !loader ? (<Image src = {source} className="img" alt={altText} height={1} width={width} />) : (<div className="h-[20rem] w-full skeleton rounded-[10px]"></div>)
    )
}

export const PureImgLoader = ({source, width, altText}) => {
    const [loader, setLoader] = useState(true)
    setTimeout(()=> {
        setLoader(false)
    }, 3000)
      return (
        !loader ? (<Image src = {source} alt={altText} height={1} width={width} />) : (<div className="h-[20rem] w-full skeleton rounded-[10px]"></div>)
      )
  }