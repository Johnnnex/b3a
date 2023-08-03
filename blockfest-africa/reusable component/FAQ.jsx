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
        <div className="wow flipInX w-[90%] md:w-3/5 mx-auto text-white p-[1rem] md:p-[3rem] rounded-[8px] space-y-[2rem]">
            <div
                ref={One}
                className=" overflow-hidden relative border-[1px] rounded-[5px] border-[#808080] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-EuclidCircularA w-[80%] font-bold my-2">What is Pontys?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconOne" }, revealData(One))}
                        className=" h-5 w-5"
                    >
                        {state.iconOne ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-spaceGrotesk duration-500 md:translate-y-[-13rem] translate-y-[-33rem] absolute">
                    Pontys is a full-service agency that specializes in helping individuals and business understand and leverage opportunities in the emerging Web3 economy. Our mission is to empower our clients to take advantage of the opportunities presented by Web3 and be at the forefront of this revolutionary change.
                </p>
            </div>
            <div
                ref={Two}
                className=" overflow-hidden relative border-[1px] rounded-[5px] border-[#808080] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-EuclidCircularA w-[80%] font-bold my-2">What services does Pontys offer?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconTwo" }, revealData(Two))}
                        className=" h-5 w-5"
                    >
                        {state.iconTwo ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-spaceGrotesk duration-500 md:translate-y-[-33rem] translate-y-[-33rem] absolute">
                    Pontys offers a wide range of services to help individuals and brands acquire the skills and knowledge necessary to navigate the Web3 ecosystem. These services include Web3 education and training, community management, social media mnagement, content writing, customer support, brand management, personal branding, DeFi, Solidity, Smart Contracts, research and onchain analysis, and more...
                </p>
            </div>
            <div
                ref={Three}
                className=" overflow-hidden relative border-[1px] rounded-[5px] border-[#808080] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-EuclidCircularA w-[80%] font-bold my-2">Why is Web3 important?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconThree" }, revealData(Three))}
                        className=" h-5 w-5"
                    >
                        {state.iconThree ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-spaceGrotesk duration-500 md:translate-y-[-13rem] translate-y-[-43rem] absolute">
                    Web3 is important because it offers a more secure, transparent, and decentralized version of the internet. It leverages blockchain technology and smart contracts to enable trustless and premissionless transactions, and it has the potential to revolutionize industries such as finance, healthcare, and governance.
                </p>
            </div>
            <div
                ref={Four}
                className=" overflow-hidden relative border-[1px] rounded-[5px] border-[#808080] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-EuclidCircularA font-bold w-[80%] my-2">What are the benefits of learning Web3 skills?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconFour" }, revealData(Four))}
                        className=" h-5 w-5"
                    >
                        {state.iconFour ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-spaceGrotesk duration-500 md:translate-y-[-33rem] translate-y-[-43rem] absolute">
                    Learning Web3 skills can open up new career opportunities, such as blockchain development, smart contract auditing, community management, content creation, and more. It can also help individuals and businesses stay ahead of the curve in the fast-evolving digital landscape and capitalize on the opportunities presented bt Web3.
                </p>
            </div>
            <div
                ref={Five}
                className=" overflow-hidden relative border-[1px] rounded-[5px] border-[#808080] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-EuclidCircularA w-[80%] font-bold my-2">Who can benefit from Pontys&apos;&nbsp;services?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconFive" }, revealData(Five))}
                        className=" h-5 w-5"
                    >
                        {state.iconFive ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-spaceGrotesk duration-500 md:translate-y-[-13rem] translate-y-[-53rem] absolute">
                    Anyone interested in learning about and leveraging the opportunities presented by Web3 can benefit from Pontys&apos;&nbsp;services. This includes individuals looking to upskill and expand their career options, as well as businesses looking to innovate and stay ahead of the competition.
                </p>
            </div>
            <div
                ref={Six}
                className=" overflow-hidden relative border-[1px] rounded-[5px] border-[#808080] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-EuclidCircularA w-[80%] font-bold my-2">How do i get started with Pontys?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconSix" }, revealData(Six))}
                        className=" h-5 w-5"
                    >
                        {state.iconSix ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-spaceGrotesk duration-500 md:translate-y-[-13rem] translate-y-[-23rem] absolute">
                    To get started with Pontys, you can reach out to us on our social media handles or check through this site. We offer a range of educational resources and services to help you navigate the Web3 ecosystem and acquire the skills and knowledge you need to succeed 
                </p>
            </div>
        </div>
    </section>
  )
}

export default FAQ
