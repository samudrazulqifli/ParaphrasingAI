import React, { useEffect } from "react";
import imgClose from "../../assets/images/close.png";
import nav from "../../images/Group 94.svg";
import { Link } from "react-router-dom";

const OptionMenuModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    if (showModal == false) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {};
  }, [showModal]);

  return (
    <>
      <button
        className="md:inline-block lg:inline-block btn-xs border-none"
        onClick={() => setShowModal(true)}
      >
        <img src={nav} className="lg:hidden md:hidden" alt="nav" />
      </button>
      {showModal ? (
        <>
          <div className="items-start flex justify-end overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/6 mt-[4%] mr-[5%] rounded-[11.81px] md:h-[391.94px] h-[156.92px]">
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
                <div className="text-black  flex flex-col gap-y-3 rounded-md mx-[3vw] my-[10%] p-[2%]">
                  <Link to={"/chatPdf"} className="text-[#222222E5] text-center bg-[#f0ffff] text-[2vw]">
                    Chat Pdf
                  </Link>
                  <Link to={"/textParapharse"} className="text-[#222222E5] text-center bg-[#f0ffff] text-[2vw]">
                    Text Paraphrase
                  </Link>
                  <Link to={"/textSummarize"} className="text-[#222222E5] text-center bg-[#f0ffff] text-[2vw]">
                    Text Summarize
                  </Link>
                  <Link to={"/textImprovement"} className="text-[#222222E5] text-center bg-[#f0ffff] text-[2vw]">
                    Text Improvement
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default OptionMenuModal;
