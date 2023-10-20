import { Link, useNavigate } from "react-router-dom";
import logo from "../images/documentorai-05 3.svg";
import { useAppSelector } from "../redux/feature/hooks";
import { ProfileModal } from "./modal/ProfileModal";
import OptionMenuModal from "./modal/OptionMenuModal";
import { useState } from "react";
import LoginModal from "./modal/LoginModal";
import RegisterModal from "./modal/RegisterModal";

const NavbarMenu = () => {
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
      <div className="flex absolute justify-between w-full mt-[17px]">
        <Link to={"/"} className="ml-[28px]">
          <img
            src={logo}
            alt="logo"
            className="w-[28px] lg:w-[82px] md:w-[45px] "
          />
        </Link>
        <div className="hidden md:flex md:items-center lg:flex lg:items-center gap-4 lg:font-medium md:text-[10px] lg:text-[16px]">
          <button
            onClick={() => {
              isLoggedIn ? navigation("/chatPdf") : setShowLogin(true);
            }}
            className="text-white"
          >
            Chat Pdf
          </button>
          <button
            onClick={() => {
              isLoggedIn ? navigation("/textParapharse") : setShowLogin(true);
            }}
            className="text-white"
          >
            Text Paraphrase
          </button>
          <button
            onClick={() => {
              isLoggedIn ? navigation("/textSummarize") : setShowLogin(true);
            }}
            className="text-white"
          >
            Text Summarize
          </button>
          <button
            onClick={() => {
              isLoggedIn ? navigation("/textImprovement") : setShowLogin(true);
            }}
            className="text-white"
          >
            Text Improvement
          </button>
        </div>
        <div className="flex items-center gap-3 mr-[20px]">
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => setShowLogin(true)}
                className="md:hover:border-[1.4px] border-[1px] p-1 md:p-5 text-[6px] h-[11.5px] flex items-center rounded-sm lg:rounded-lg capitalize text-white md:h-[20px] md:text-[10px] lg:text-[15px] lg:h-[45px] "
              >
                Log in
              </button>
              <button
                onClick={() => setShowRegister(true)}
                className="md:hover:border-[1.4px] border-[1px] p-1 md:p-5 text-[6px] h-[11.5px] flex items-center rounded-sm lg:rounded-lg capitalize text-white mr-[1px] lg:mr-[72px] md:h-[20px] md:text-[10px] lg:text-[15px] lg:h-[45px] "
              >
                Sign up
              </button>
            </>
          ) : (
            <ProfileModal />
          )}
          <OptionMenuModal />
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
