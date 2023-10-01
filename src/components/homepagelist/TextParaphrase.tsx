import React from "react";
import imgLogo from "../../assets/images/stack-black.png";

const TextParaphrase = () => {
  return (
    <>
      <div className="bg-white md:h-[192px] h-[47.91px] md:w-[327px] w-[81.59px] md:rounded-xl rounded-sm absolute md:left-10 md:top-12 top-2 left-2 md:p-4 p-1 text-black">
        <div className="flex justify-between md:text-[12px] text-[2.99px] font-semibold">
          <div className="">Your Text</div>
          <div className="flex items-center md:gap-1 gap-[1.5px]">
            <div className="underline md:underline-offset-2 decoration-[#047AC0] md:decoration-[3px] decoration-[0.75px]">
              idea 2
            </div>
            <div className="md:w-[29px] w-[7.21px] md:h-[9px] h-[2.24px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="md:w-[29px] w-[7.21px] md:h-[9px] h-[2.24px] bg-[#E9E9E9] rounded-2xl"></div>
          </div>
        </div>
        <div className="md:border border-[0.25px] border-black md:rounded-lg rounded-sm md:w-[296px] w-[73.86px] md:h-[140px] h-[34.93px] md:mt-1 mt-[1px] md:pt-4 flex flex-col">
          <div className="mx-auto flex flex-col md:gap-3 gap-[2px] pt-1">
            <div className="md:w-[252px] w-[62.88px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="md:w-[252px] w-[62.88px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="md:w-[252px] w-[62.88px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="md:w-[252px] w-[62.88px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="md:w-[115px] w-[28px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
          </div>
        </div>
      </div>
      <div className="bg-white md:h-[271px] h-[67.62px] md:w-[327px] w-[81.59px] md:rounded-xl rounded-sm absolute md:right-12 md:bottom-12 right-3 bottom-3 md:p-4 p-1 md:text-[12px] text-[2.99px] font-semibold">
        <div className="flex justify-between">
          <div className="">Text Idea</div>
          <div className="flex items-center md:gap-1 gap-[1.5px]">
            <div className="underline md:underline-offset-2 decoration-[#047AC0] md:decoration-[3px] decoration-[0.75px]">
              idea1
            </div>
            <div className="md:w-[29px] w-[7.21px] md:h-[9px] h-[2.24px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="md:w-[29px] w-[7.21px] md:h-[9px] h-[2.24px] bg-[#E9E9E9] rounded-2xl"></div>
          </div>
        </div>
        <div className="md:border border-[0.25px] border-black md:rounded-lg rounded-sm md:w-[296px] w-[73.86px] md:h-[169px] h-[42.17px] mt-1 md:mt-1 mt-[1px] flex flex-col">
          <div className="mx-auto flex flex-col md:gap-3 gap-[2px] pt-1">
            <div className="md:w-[252px] w-[62.88px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="md:w-[252px] w-[62.88px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="md:w-[252px] w-[62.88px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="md:w-[252px] w-[62.88px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="md:w-[115px] w-[28px] md:h-[9px] h-[2px] bg-[#E9E9E9] rounded-2xl"></div>
          </div>
        </div>
        <div className="flex justify-between md:mt-3 mt-[1px]">
          <div>
            <table className="table-auto mb-0">
              <tr>
                <td>
                  <div className="md:text-[12px] text-[2.99px]">
                    Tone of voice:
                  </div>
                </td>
                <td>
                  <div className="md:w-[75px] w-[18.55px] md:h-[9px] h-[1.98px] bg-[#E9E9E9] rounded-2xl"></div>
                </td>
              </tr>
            </table>
            <table className="table-auto mt-0">
              <tr>
                <td>
                  <div className="md:text-[12px] text-[2.99px]">
                    Readability:
                  </div>
                </td>
                <td>
                  <div className="md:w-[85px] w-[21.02px] md:h-[9px] h-[1.98px] bg-[#E9E9E9] rounded-2xl"></div>
                </td>
              </tr>
            </table>
          </div>
          <div className="md:h-[37px] h-[9.15px] md:w-[82px] w-[20.28px] border border-black md:rounded-md rounded-sm grid content-center">
            <img
              className="md:h-[18px] h-[4.47px] md:w-[18px] w-[4.47px] mx-auto"
              src={imgLogo}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextParaphrase;
