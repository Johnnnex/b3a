import React, { useReducer, useRef } from 'react'
import Image from 'next/image';

const FAQ = () => {
    const One = useRef();
	const Two = useRef();
	const Three = useRef();
	const Four = useRef();
	const Five = useRef();
	const Six = useRef();
	const memberOne = useRef();
	const memberTwo = useRef();
	const memberThree = useRef();
	const memberFour = useRef();
	const memberFive = useRef();
	const memberSix = useRef();
    const reducer = (state, action) => {
		switch (action.type) {
			case "IconOne":
				return { ...state, iconOne: !state.iconOne };
			case "IconTwo":
				return { ...state, iconTwo: !state.iconTwo };
			case "IconThree":
				return { ...state, iconThree: !state.iconThree };
			case "IconFour":
				return { ...state, iconFour: !state.iconFour };
			case "IconFive":
				return { ...state, iconFive: !state.iconFive };
			case "IconSix":
				return { ...state, iconSix: !state.iconSix };
			case "Log":
				return { ...state, isLoggedIn: !state.isLoggedIn };
		}
	};
	const [state, dispatch] = useReducer(reducer, {
		iconOne: false,
		iconTwo: false,
		iconThree: false,
		iconFour: false,
		iconFive: false,
		iconSix: false,
		isLoggedIn: false,
	});
    const revealData = (value) => {
		value.current.classList.toggle("full-data");
	};
    const svgOne = () => {
		return <Image src="/Images/plus.svg" height={31} width={31} alt="plus" />;
	};
	const svgTwo = () => {
		return <Image src="/Images/minus.svg" height={31} width={31} alt="minus" />;
	};
  return (
    <section className=" pt-[7rem]">
        <h3 className="wow bounceInDown font-poppins text-center text-white text-3xl font-[600] mb-[2rem]">
            You've Got <span className="text-[#1A63E4]">Questions?</span> <br />
            <span className='text-[1.2rem]'>Great! Cause We Have Answers!</span>
        </h3>
        <div className="wow fadeIn w-[90%] md:w-3/5 mx-auto text-white p-[1rem] md:p-[3rem] rounded-[8px] space-y-[2rem]">
            <div
                ref={One}
                className=" overflow-hidden relative rounded-[5px] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-poppins w-[80%] font-bold my-2">What is BlockFest</h3>
                    <button
                        onClick={() => dispatch({ type: "IconOne" }, revealData(One))}
                        className=" h-5 w-5"
                    >
                        {state.iconOne ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-poppins duration-500 md:translate-y-[-13rem] translate-y-[-33rem] absolute">
                    Ever thought of a convention point of builders in the Web3 Ecosystem- Developers, creatives, traders, investors & community builders, Well, BLOCKF3ST AFRICA is it, and More!
                </p>
            </div>
            <div
                ref={Two}
                className=" overflow-hidden relative rounded-[5px] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-poppins w-[80%] font-bold my-2">What differs BlockFest from other events?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconTwo" }, revealData(Two))}
                        className=" h-5 w-5"
                    >
                        {state.iconTwo ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-poppins duration-500 md:translate-y-[-33rem] translate-y-[-33rem] absolute">
                    some lorem texts here
                </p>
            </div>
            <div
                ref={Three}
                className=" overflow-hidden relative  rounded-[5px] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-poppins w-[80%] font-bold my-2">What topics would the event cover/center?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconThree" }, revealData(Three))}
                        className=" h-5 w-5"
                    >
                        {state.iconThree ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-poppins duration-500 md:translate-y-[-13rem] translate-y-[-43rem] absolute">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eaque, omnis dolorum eligendi sed debitis nostrum nam illo, beatae distinctio esse, repellendus cumque quidem. Corrupti illum aspernatur culpa sapiente porro!
                </p>
            </div>
            <div
                ref={Four}
                className=" overflow-hidden relative  rounded-[5px] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-poppins font-bold w-[80%] my-2">What is BLOCKF3ST Mission? -BUIDL</h3>
                    <button
                        onClick={() => dispatch({ type: "IconFour" }, revealData(Four))}
                        className=" h-5 w-5"
                    >
                        {state.iconFour ? svgTwo() : svgOne()}
                    </button>
                </div>
                <ul className="list-disc font-poppins duration-500 md:translate-y-[-33rem] translate-y-[-43rem] absolute">
                    <li className="">Provide a gathering of developers, creatives, digital creators</li>
                </ul>
            </div>
            <div
                ref={Five}
                className=" overflow-hidden relative  rounded-[5px] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-poppins w-[80%] font-bold my-2">Who can benefit from Pontys&apos;&nbsp;services?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconFive" }, revealData(Five))}
                        className=" h-5 w-5"
                    >
                        {state.iconFive ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-poppins duration-500 md:translate-y-[-13rem] translate-y-[-53rem] absolute">
                    Anyone interested in learning about and leveraging the opportunities presented by Web3 can benefit from Pontys&apos;&nbsp;services. This includes individuals looking to upskill and expand their career options, as well as businesses looking to innovate and stay ahead of the competition.
                </p>
            </div>
            <div
                ref={Six}
                className=" overflow-hidden relative  rounded-[5px] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-poppins w-[80%] font-bold my-2">How do i get started with Pontys?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconSix" }, revealData(Six))}
                        className=" h-5 w-5"
                    >
                        {state.iconSix ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-poppins duration-500 md:translate-y-[-13rem] translate-y-[-23rem] absolute">
                    To get started with Pontys, you can reach out to us on our social media handles or check through this site. We offer a range of educational resources and services to help you navigate the Web3 ecosystem and acquire the skills and knowledge you need to succeed 
                </p>
            </div>
        </div>
    </section>
  )
}

export default FAQ
