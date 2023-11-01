import { useState } from "react";
import arrowright from "../assets/images/right-arrows.png";
import LoginModal from "./modal/LoginModal";
import RegisterModal from "./modal/RegisterModal";
import { useAppSelector } from "../redux/feature/hooks";
import { useNavigate } from "react-router-dom";

const GetStarted = ({ page }: any) => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigation = useNavigate();
  return (
    <>
      <LoginModal
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
      />
      <RegisterModal
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        setShowLogin={setShowLogin}
      />
      <button
        onClick={() => (isLoggedIn ? navigation(page) : setShowLogin(true))}
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
