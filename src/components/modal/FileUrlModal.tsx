import { useEffect, useState } from "react";
import imgClose from "../../assets/images/close.png";

const FileUrlModal = ({ setTitle, setUrl, setDownloadPdf }: any) => {
  const [showModal, setShowModal] = useState(false);

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
        type="button"
        className="text-[#047AC0] p-0 text-[12px] font-medium inset-y-0 right-0 border-none focus:outline-none"
        onClick={() => setShowModal(true)}
      >
        From URL
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative md:w-3/6 w-5/6 my-6 rounded-[11.81px] mx-auto md:h-[391.94px] h-[156.92px]">
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
                <input
                  type="text"
                  placeholder="title"
                  className="border-2 text-black md:mx-7 mx-2 mt-9 px-3"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="url"
                  className="border-2 text-black md:mx-7 mx-2 mt-3 px-3"
                  onChange={(e) => setUrl(e.target.value)}
                />
                <div className="flex justify-center md:gap-[29.13px] gap-[11.66px] md:mb-[31.3px] mb-[12.5px] md:mt-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="text-[#54595E] font-medium md:w-[90.53px] w-[35.99px] md:h-[29.96px] h-[11.99px] md:rounded-[3.94px] rounded-[0.31px] border-[0.79px] border-[#343434] md:text-[9.45px] text-[3.76px] inset-y-0 right-0 focus:border-[#343434] hover:border-[#343434] hover:ring-0 focus:ring-0 focus:outline-none"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setDownloadPdf(true);
                      setShowModal(false);
                    }}
                    className="text-white bg-[#54595E] font-medium md:w-[90.53px] w-[35.99px] md:h-[29.96px] h-[11.99px] md:rounded-[3.94px] rounded-[0.31px] border-[0.79px] border-[#343434] md:text-[9.45px] text-[3.76px] inset-y-0 right-0 focus:border-[#343434] hover:border-[#343434] hover:ring-0 focus:ring-0 focus:outline-none"
                  >
                    Show PDF
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
};

export default FileUrlModal;
