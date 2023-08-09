import React, { useReducer, useRef } from 'react'
import Image from 'next/image';

const FAQ = () => {
    const One = useRef();
	const Two = useRef();
	const Three = useRef();
	const Four = useRef();
	const Five = useRef();
	const Six = useRef();
	const Seven = useRef();
	const Eight = useRef();
	const Nine = useRef();
	const Ten = useRef();
	const Eleven = useRef();
	const Twelve = useRef();
	const Thirteen = useRef();
	const memberOne = useRef();
	const memberTwo = useRef();
	const memberThree = useRef();
	const memberFour = useRef();
	const memberFive = useRef();
	const memberSix = useRef();
	const memberSeven = useRef();
	const memberEight = useRef();
	const memberNine = useRef();
	const memberTen = useRef();
	const memberEleven = useRef();
	const memberTwelve= useRef();
	const memberThirteen = useRef();
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
			case "IconSeven":
				return { ...state, iconSeven: !state.iconSeven };
			case "IconEight":
				return { ...state, iconEight: !state.iconEight };
			case "IconNine":
				return { ...state, iconNine: !state.iconNine };
			case "IconTen":
				return { ...state, iconTen: !state.iconTen };
			case "IconEleven":
				return { ...state, iconEleven: !state.iconEleven };
			case "IconTwelve":
				return { ...state, iconTwelve: !state.iconTwelve };
			case "IconThirteen":
				return { ...state, iconThirteen: !state.iconThirteen };
		}
	};
	const [state, dispatch] = useReducer(reducer, {
		iconOne: false,
		iconTwo: false,
		iconThree: false,
		iconFour: false,
		iconFive: false,
		iconSix: false,
		iconSeven: false,
		iconEight: false,
		iconNine: false,
		iconTen: false,
		iconEleven: false,
		iconTwelve: false,
		iconThirteen: false,
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
    <section id="FAQ" className=" pt-[7rem]">
        <h3 className="wow fadeIn font-poppins text-center text-white text-3xl font-[600] mb-[2rem]">
            You&apos;ve Got <span className="text-[#1A63E4]">Questions?</span> <br />
            <span className='text-[1.2rem]'>Great! Cause We Have Answers!</span>
        </h3>
        <div className="wow fadeIn w-[100%] md:w-3/5 mx-auto text-white p-[1rem] md:p-[3rem] rounded-[8px] space-y-[2rem]">
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
                <p className="font-poppins text-[#FFFFFFCC] duration-500 md:translate-y-[-13rem] translate-y-[-43rem] absolute">
                    Ever thought of a convention point of builders in the Web3 Ecosystem? from Developers, creatives, traders, investors & community builders, Well, BLOCKF3ST AFRICA is it, and More!
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
                <p className="font-poppins text-[#FFFFFFCC] duration-500 md:translate-y-[-33rem] translate-y-[-43rem] absolute">
                    Seeing most events either cater to just the finance, tech, fintech, developers, creatives or traders only community, BLOCKF3ST is on a mission to bring together the individuals that make the dream team of any infrastructure. <br />
                    To foster unity, mentoring, scholarships and opportunities in the cooperate world and virgin ground for investors and employers.
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
                <ul className="font-poppins text-[#FFFFFFCC] list-disc list-inside duration-500 md:translate-y-[-29rem] translate-y-[-83rem] absolute">
                    <li>Blockchain technology as a protagonist to finance, healthcare, supply chain, politics and more industries.</li>
                    <li>Learn and discuss the latest about APIs and Frameworks regarding Web3 protocols through hands-on workshops and talk sessions with professionals.</li>
                    <li>DeFi; future of decentralized finance applications and real life utilization </li>
                    <li>NFTs and the evolving landscape of digital assets and collectibles.</li>
                    <li>Web3 protocols, interoperability, and the evolution of the internet.</li>
                    <li>Privacy, security, and trust in Web3 applications.</li>
                    <li>Web3 trends and innovations for Digital creators </li>
                    <li>Transitioning from Web2 to Web3 as a tech and non IT professional </li>
                    <li>Building a career in Web3 and fireside chats on monetization of web3 skills for the end users </li>
                </ul>
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
                <ul className="list-disc text-[#FFFFFFCC] list-inside font-poppins duration-500 md:translate-y-[-33rem] translate-y-[-43rem] absolute">
                    <li className="">Provide a gathering of developers, creatives, digital creators, and traders beyond an annual event- a community </li>
                    <li>Groom individuals who can advance the IT and non IT sectors of the crypto, blockchain, fintech, ecosystems.</li>
                    <li>We foster enlightenment, networking, and support for entry-level talent, integrating and positioning them into right communities, and connecting them with corporate partners.</li>
                </ul>
            </div>
            <div
                ref={Five}
                className=" overflow-hidden relative  rounded-[5px] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-poppins w-[80%] font-bold my-2">What is BLOCKF3ST Vision? -BRIDGE</h3>
                    <button
                        onClick={() => dispatch({ type: "IconFive" }, revealData(Five))}
                        className=" h-5 w-5"
                    >
                        {state.iconFive ? svgTwo() : svgOne()}
                    </button>
                </div>
                <ul className="font-poppins list-disc text-[#FFFFFFCC] list-inside duration-500 md:translate-y-[-13rem] translate-y-[-43rem] absolute">
                    <li>Be the premier platform for Web3 enthusiasts, fostering collaboration and innovation. </li>
                    <li>Our vision is a strong, all-inclusive community of African Youths breaking into the Global web3 ecosystem.</li>
                </ul>
            </div>
            <div
                ref={Six}
                className=" overflow-hidden relative  rounded-[5px] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-poppins w-[80%] font-bold my-2">What is BLOCKF3ST Goal? -BECOME</h3>
                    <button
                        onClick={() => dispatch({ type: "IconSix" }, revealData(Six))}
                        className=" h-5 w-5"
                    >
                        {state.iconSix ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-poppins text-[#FFFFFFCC] duration-500 md:translate-y-[-13rem] translate-y-[-33rem] absolute">
                    Evolve the economic, financial and professional lives of Young African youths harnessing everything the Blockchain Tech has to offer.
                </p>
            </div>
            <div
                ref={Seven}
                className=" overflow-hidden relative  rounded-[5px] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-poppins w-[80%] font-bold my-2">Is it virtual or in person event?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconSeven" }, revealData(Seven))}
                        className=" h-5 w-5"
                    >
                        {state.iconSeven ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-poppins text-[#FFFFFFCC] duration-500 md:translate-y-[-13rem] translate-y-[-33rem] absolute">
                    Best believe you’d be getting the best of both experiences as this is an hybrid event. Kindly make sure to RSVP/register when the link is out, so we can make due preparation for all our attendees.
                </p>
            </div>
            <div
                ref={Eight}
                className=" overflow-hidden relative  rounded-[5px] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-poppins w-[80%] font-bold my-2">Is it a paid event?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconEight" }, revealData(Eight))}
                        className=" h-5 w-5"
                    >
                        {state.iconEight ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-poppins text-[#FFFFFFCC] duration-500 md:translate-y-[-13rem] translate-y-[-23rem] absolute">
                    No. For Experts and Newbies alike, this event is absolutely FREE!
                </p>
            </div>
            <div
                ref={Nine}
                className=" overflow-hidden relative  rounded-[5px] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-poppins w-[80%] font-bold my-2">Where would BlockFest 2023 hold?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconNine" }, revealData(Nine))}
                        className=" h-5 w-5"
                    >
                        {state.iconNine ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-poppins text-[#FFFFFFCC] duration-500 md:translate-y-[-13rem] translate-y-[-23rem] absolute">
                    Lagos Nigeria, location is TBD.
                </p>
            </div>
            <div
                ref={Ten}
                className=" overflow-hidden relative  rounded-[5px] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-poppins w-[80%] font-bold my-2">How many days will it hold for?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconTen" }, revealData(Ten))}
                        className=" h-5 w-5"
                    >
                        {state.iconTen ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-poppins text-[#FFFFFFCC] duration-500 md:translate-y-[-13rem] translate-y-[-23rem] absolute">
                    2 days
                </p>
            </div>
            <div
                ref={Eleven}
                className=" overflow-hidden relative  rounded-[5px] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-poppins w-[80%] font-bold my-2">How do i become a volunteer?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconEleven" }, revealData(Eleven))}
                        className=" h-5 w-5"
                    >
                        {state.iconEleven ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-poppins text-[#FFFFFFCC] duration-500 md:translate-y-[-13rem] translate-y-[-23rem] absolute">
                    Apply <a href="https://bit.ly/B3AVolunteers" className=" text-[#1A63E4]" target="_blank" rel="noopener noreferrer">Here</a>
                </p>
            </div>
            <div
                ref={Twelve}
                className=" overflow-hidden relative  rounded-[5px] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-poppins w-[80%] font-bold my-2">What are the channels for communication and inquiries?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconTwelve" }, revealData(Twelve))}
                        className=" h-5 w-5"
                    >
                        {state.iconTwelve ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-poppins text-[#FFFFFFCC] duration-500 md:translate-y-[-13rem] translate-y-[-35rem] absolute">
                    Stay in the know of everything you need to know about Blockf3st through our Twitter, Instagram, YouTube and LinkedIn platforms! <br />

                    For enquires, reach us at <a className=" text-[#1A63E4]" href="mailto:contact@blockfestafrica.com">Mail</a>
                </p>
            </div>
            <div
                ref={Thirteen}
                className=" overflow-hidden relative  rounded-[5px] p-2 mx-auto space-y-[1rem]"
            >
                <div className=" flex justify-between items-center">
                    <h3 className="font-poppins w-[80%] font-bold my-2">What happens post event?</h3>
                    <button
                        onClick={() => dispatch({ type: "IconThirteen" }, revealData(Thirteen))}
                        className=" h-5 w-5"
                    >
                        {state.iconThirteen ? svgTwo() : svgOne()}
                    </button>
                </div>
                <p className="font-poppins text-[#FFFFFFCC] duration-500 md:translate-y-[-13rem] translate-y-[-23rem] absolute">
                    We understand onboarding into Web3, sensitization and adequate education doesn’t just occur in a ‘2 day event’ , hence BLOCKF3ST has a lot to offer every budding tech and Web3 enthusiast, <br />
                    Watch out for our 2024 roadmap!
                </p>
            </div>
        </div>
    </section>
  )
}

export default FAQ
