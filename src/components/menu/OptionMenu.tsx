import React from "react";
import imgPopUp from "../assets/images/img-popup.png";
import imgClose from "../assets/images/close.png";

export default function OptionMenu() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative md:w-[503.01px] w-[200px] my-6 rounded-[11.81px] mx-auto md:h-[391.94px] h-[156.92px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="p-0 md:h-[22.64px] h-[9.02px] md:w-[22.64px] w-[8.96px] inset-y-0 border-none focus:outline-none absolute md:top-[5.22px] top-[2.01px] md:right-[18.39px] right-[7.78px]"
                >
                  <img src={imgClose} alt="" />
                </button>
                <div className="relative md:mt-[28.58px] mt-[11.4px] flex-auto">
                  <img
                    src={imgPopUp}
                    className="md:w-[389.82px] w-[154.99px] md:h-[183.23px] h-[73.36px] mx-auto"
                    alt=""
                  />
                </div>
                <div className="md:text-[23.62px] text-[9.39px] font-semibold text-[#54595E] text-center">
                  Sure you want to accept this?
                </div>
                <div className="md:text-[14.17px] text-[5.63px] font-normal text-center">
                  Are you sure you want to accept this
                </div>
                <div className="flex justify-center md:gap-[29.13px] gap-[11.66px] md:mb-[31.3px] mb-[12.5px] md:mt-[36.28px] mt-[13.92px]">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="text-[#54595E] font-medium md:w-[90.53px] w-[35.99px] md:h-[29.96px] h-[11.99px] md:rounded-[3.94px] rounded-[0.31px] border-[0.79px] border-[#343434] md:text-[9.45px] text-[3.76px] inset-y-0 right-0 focus:border-[#343434] hover:border-[#343434] hover:ring-0 focus:ring-0 focus:outline-none"
                  >
                    No, Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="text-white bg-[#54595E] font-medium md:w-[90.53px] w-[35.99px] md:h-[29.96px] h-[11.99px] md:rounded-[3.94px] rounded-[0.31px] border-[0.79px] border-[#343434] md:text-[9.45px] text-[3.76px] inset-y-0 right-0 focus:border-[#343434] hover:border-[#343434] hover:ring-0 focus:ring-0 focus:outline-none"
                  >
                    Yes, Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}