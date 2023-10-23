import imgPopUp from "../../assets/images/img-popup.png";
import imgClose from "../../assets/images/close.png";
import { useNavigate } from "react-router-dom";

export default function LandingModal({ showModal, setShowModal, navigateTo }: any) {
  const navigate = useNavigate();
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[503.01px] my-6 rounded-[11.81px] mx-auto h-[391.94px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="p-0 h-[22.64px] w-[22.64px] inset-y-0 border-none focus:outline-none absolute top-[5.22px] right-[18.39px]"
                >
                  <img src={imgClose} alt="" />
                </button>
                <div className="relative mt-[28.58px] flex-auto">
                  <img
                    src={imgPopUp}
                    className="w-[389.82px] h-[183.23px] mx-auto"
                    alt=""
                  />
                </div>
                <div className="text-[23.62px] font-semibold text-[#54595E] text-center">
                  Sure you want to accept this?
                </div>
                <div className="text-[14.17px] font-normal text-center">
                  Are you sure you want to accept this
                </div>
                <div className="flex justify-center gap-[29.13px] mb-[31.3px] mt-[36.28px]">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="text-[#54595E] font-medium w-[90.53px] h-[29.96px] rounded-[3.94px] border-[0.79px] border-[#343434] text-[9.45px] inset-y-0 right-0 focus:border-[#343434] hover:border-[#343434] hover:ring-0 focus:ring-0 focus:outline-none"
                  >
                    No, Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate(navigateTo)}
                    className="text-white bg-[#54595E] font-medium w-[90.53px] h-[29.96px] rounded-[3.94px] border-[0.79px] border-[#343434] text-[9.45px] inset-y-0 right-0 focus:border-[#343434] hover:border-[#343434] hover:ring-0 focus:ring-0 focus:outline-none"
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
