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
        <h3 className="wow fadeInDown font-poppins text-center text-white text-3xl font-[600] mb-[2rem]">
            You've Got <span className="text-[#1A63E4]">Questions?</span> <br />
            <span className='text-[1.2rem]'>Great! Cause We Have Answers!</span>
        </h3>
        <div className="wow fadeInUp w-[90%] md:w-3/5 mx-auto text-white p-[1rem] md:p-[3rem] rounded-[8px] space-y-[2rem]">
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
                <ul className="list-disc list-inside font-poppins duration-500 md:translate-y-[-33rem] translate-y-[-43rem] absolute">
                    <li className="">Provide a gathering of developers, creatives, digital creators</li>
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
                <p className="font-poppins duration-500 md:translate-y-[-13rem] translate-y-[-53rem] absolute">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, aliquid ipsa. Consequuntur, reprehenderit sed quae repudiandae labore, maiores aut possimus fugit fugiat reiciendis animi nesciunt debitis officiis atque earum eos.
                </p>
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
                <p className="font-poppins duration-500 md:translate-y-[-13rem] translate-y-[-23rem] absolute">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, neque temporibus omnis, tempora aut dolore voluptatibus ut, eaque quod numquam unde cum similique earum corporis distinctio fugit voluptatem atque nulla.
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
                <p className="font-poppins duration-500 md:translate-y-[-13rem] translate-y-[-23rem] absolute">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, neque temporibus omnis, tempora aut dolore voluptatibus ut, eaque quod numquam unde cum similique earum corporis distinctio fugit voluptatem atque nulla.
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
                <p className="font-poppins duration-500 md:translate-y-[-13rem] translate-y-[-23rem] absolute">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, neque temporibus omnis, tempora aut dolore voluptatibus ut, eaque quod numquam unde cum similique earum corporis distinctio fugit voluptatem atque nulla.
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
                <p className="font-poppins duration-500 md:translate-y-[-13rem] translate-y-[-23rem] absolute">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, neque temporibus omnis, tempora aut dolore voluptatibus ut, eaque quod numquam unde cum similique earum corporis distinctio fugit voluptatem atque nulla.
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
                <p className="font-poppins duration-500 md:translate-y-[-13rem] translate-y-[-23rem] absolute">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, neque temporibus omnis, tempora aut dolore voluptatibus ut, eaque quod numquam unde cum similique earum corporis distinctio fugit voluptatem atque nulla.
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
                <p className="font-poppins duration-500 md:translate-y-[-13rem] translate-y-[-23rem] absolute">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, neque temporibus omnis, tempora aut dolore voluptatibus ut, eaque quod numquam unde cum similique earum corporis distinctio fugit voluptatem atque nulla.
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
                <p className="font-poppins duration-500 md:translate-y-[-13rem] translate-y-[-25rem] absolute">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, neque temporibus omnis, tempora aut dolore voluptatibus ut, eaque quod numquam unde cum similique earum corporis distinctio fugit voluptatem atque nulla.
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
                <p className="font-poppins duration-500 md:translate-y-[-13rem] translate-y-[-23rem] absolute">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, neque temporibus omnis, tempora aut dolore voluptatibus ut, eaque quod numquam unde cum similique earum corporis distinctio fugit voluptatem atque nulla.
                </p>
            </div>
        </div>
    </section>
  )
}

export default FAQ
