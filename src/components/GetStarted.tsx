import { useState } from "react";
import arrowright from "../assets/images/right-arrows.png";
import LandingModal from "./modal/LandingModal";
import { useAppSelector } from "../redux/feature/hooks";

const GetStarted = ({ page }: any) => {
  const [showIklan, setShowIklan] = useState(false);
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  return (
    <>
      <LandingModal
        showModal={showIklan}
        setShowModal={setShowIklan}
        navigateTo={page}
      />
      <button
        onClick={() => setShowIklan(true)}
        className={`bg-[#03FFFE] md:max-w-[190px] md:h-[41px] text-black max-w-[47.38px] h-[10.22px] md:rounded-md rounded-sm flex flex-col justify-center items-center ${
          isLoggedIn ? "" : "btn-disabled"
        }`}
      >
        <div className="flex md:gap-3 gap-1 justify-center">
          <div className="font-semibold md:text-[15px] text-[3.74px]">
            Get Started
          </div>
          <img
            src={arrowright}
            className="md:h-[23px] md:w-[23px] h-[4.71px] w-[4.71px]"
            alt=""
          />
        </div>
      </button>
    </>
  );
};

export default GetStarted;
