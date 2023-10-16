import React, { useEffect } from "react";
import imgPDF from "../../assets/images/uploaded_pdf.png";
import imgClose from "../../assets/images/close.png";

interface Props {
  username: string;
}

export const ProfileModal: React.FC<Props> = ({ username }) => {
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
        type="button"
        className="inset-y-0 flex items-center mr-[10.49px] border-none focus:outline-none"
        onClick={() => setShowModal(true)}
      >
        Hi {username}
      </button>
      {showModal ? (
        <>
          <div className="items-start flex justify-end overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative md:w-2/6 w-4/6 mt-[4%] mr-[5%] rounded-[11.81px] md:h-[391.94px] h-[156.92px]">
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
                <div className="text-black border-2 border-[#d9d9d9] rounded-md mt-[10%] mx-[3vw] p-[2%]">
                  <div className="text-[#626262] text-[3vw]">Your Name</div>
                  <div className="text-[#222222E5]">{username}</div>
                  <div className="text-[#626262]">Your Name</div>
                  <div className="text-[#222222E5]">{username}</div>
                  <div className="text-[#626262]">Password</div>
                  <div className="text-[#222222E5]">*********</div>
                </div>
                <div className="text-black border-2 border-[#d9d9d9] rounded-md mt-[3%] mx-[3vw] p-[2%]">
                  <div className="text-black">PDF Uploaded</div>
                  <img src={imgPDF} className="w-[25%] h-[30%]" alt="" />
                </div>
                <div className="text-black border-2 border-[#d9d9d9] rounded-md mx-[3vw] mt-[3%] mb-[10%] p-[2%]">
                  <div className="text-[#222222E5]">Device</div>
                  <div className="text-[#222222E5]">Logout</div>
                  <div className="text-[#222222E5]">Delete Account</div>
                  <div className="text-[#222222E5]">Change Password</div>
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
