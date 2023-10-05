import { useState } from "react";
import { Link } from "react-router-dom";

const CardText = () => {
  const [count, setCount] = useState(0)
  const [result, setResult] = useState(0)

  const wordChange = (e: { target: { value: string | number[]; }; }) => {
    console.log(e)
    setCount(e.target.value.length)
  }
  const resultChange = (e: { target: { value: string | number[]; }; }) => {
    console.log(e)
    setResult(e.target.value.length)
  }
  return (
    <>
      <div className=" flex justify-center md:grid-cols-2 md:grid card rounded-md md:rounded-[20px] shadow-2xl w-[185px] h-[242px] border md:w-[895px] md:h-[499px] ">
        <div className="ml-4 mb-1 md:mt-[20px] md:ml-[60px]">
          <h2 className="text-[5px] text-[#4E4E4E] font-bold mb-1 md:text-[15px]">Your Text</h2>
          <div className="text-[5px] md:text-[15px] md:mt-[310px] md:ml-[20px] font-medium absolute ml-[6px] mt-[77px] text-[#A7A7A7]">{count}/200</div>
          <textarea className="resize-none text-black text-[5px] textarea-xs md:textarea-md w-[157px] md:w-[377px] h-[85px] md:h-[332px] border-[0.9px] rounded-sm md:rounded-[10px] bg-white placeholder:text-[5px] md:placeholder:text-[15px]" placeholder="Begin typing or paste text here..." onChange={wordChange}></textarea>
        </div>
        <div className="ml-4 md:mt-[20px]">
          <h2 className="text-[5px] text-[#4E4E4E] font-bold mb-1 md:text-[15px]">Text Idea</h2>
          <div className="text-[5px] md:text-[15px] md:mt-[310px] md:ml-[20px] font-medium absolute ml-[6px] mt-[77px] text-[#A7A7A7]">{result}/200</div>
          <textarea className="resize-none text-black text-[5px] textarea-xs md:textarea-md w-[157px] md:w-[377px] h-[85px] md:h-[332px] border-[0.9px] rounded-sm md:rounded-[10px] bg-white placeholder:text-[5px] md:placeholder:text-[15px]" onChange={resultChange}></textarea> 
        </div>
        <div className="w-full flex justify-center md:col-span-2 mt-[3px]">
        <Link className=" flex justify-center items-center border-[#047AC0] border-[0.54px] rounded-[1.35px] w-[34.13px] h-[13px] text-[4.06px] text-[#3E3E3E] font-extrabold md:text-[15px] md:w-[126px] md:h-[43px] md:rounded-[5px]" to={""}>Improved</Link>
        </div>
      </div>
    </>
  );
};

export default CardText;
