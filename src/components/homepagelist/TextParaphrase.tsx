import React from "react";
import imgLogo from "../../assets/images/stack-black.png"

const TextParaphrase = () => {
  return (
    <>
      <div className="bg-white h-[192px] w-[327px] rounded-xl absolute left-10 top-12 p-4">
        <div className="flex justify-between">
          <div className="text-black text-[12px] font-semibold">Your Idea</div>
          <div className="flex items-center gap-1">
            <div className="text-black text-[12px] font-semibold underline underline-offset-2 decoration-[#047AC0] decoration-[3px]">idea2</div>
            <div className="w-[29px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[29px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
          </div>
        </div>
        <div className="border border-black rounded-lg w-[296px] h-[140px] mt-1 pt-4 flex flex-col">
          <div className="mx-auto flex flex-col gap-3 pt-1">
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[115px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[271px] w-[327px] rounded-xl absolute right-12 bottom-12 p-4">
        <div className="flex justify-between">
          <div className="text-black text-[12px] font-semibold">Text Idea</div>
          <div className="flex items-center gap-1">
            <div className="text-black text-[12px] font-semibold underline underline-offset-2 decoration-[#047AC0] decoration-[3px]">idea1</div>
            <div className="w-[29px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[29px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
          </div>
        </div>
        <div className="border border-black rounded-lg w-[296px] h-[169px] mt-1 pt-4 flex flex-col">
          <div className="mx-auto flex flex-col gap-3 pt-1">
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[252px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
            <div className="w-[115px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div>
            <table>
              <tr>
                <td>
                  <div className="text-[12px]">Tone of voice:</div>
                </td>
                <td>
                  <div className="w-[75px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
                </td>
              </tr>
            </table>
            <table>
              <tr>
                <td>
                  <div className="text-[12px]">Readability:</div>
                </td>
                <td>
                  <div className="w-[85px] h-[9px] bg-[#E9E9E9] rounded-2xl"></div>
                </td>
              </tr>
            </table>
          </div>
          <div className="h-[37px] w-[82px] border border-black rounded-md grid content-center">
            <img className="h-[18px] w-[18px] mx-auto" src={imgLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextParaphrase;
