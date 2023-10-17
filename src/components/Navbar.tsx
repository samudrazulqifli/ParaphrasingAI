import { Link } from "react-router-dom";
import logo from "../images/documentorai-05 3.svg";
import { useAppSelector } from "../redux/feature/hooks";
import { ProfileModal } from "./modal/ProfileModal";
import OptionMenuModal from "./modal/OptionMenuModal";

const NavbarMenu = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  return (
    <>
      <div className="flex absolute justify-between w-full mt-[17px]">
        <Link to={"/"} className="ml-[28px]">
          <img
            src={logo}
            alt="logo"
            className="w-[28px] lg:w-[82px] md:w-[45px] "
          />
        </Link>
        <div className="hidden md:flex md:items-center lg:flex lg:items-center gap-4 lg:font-medium md:text-[10px] lg:text-[16px]">
          <Link to="/chatPdf" className="text-white">
            Chat Pdf
          </Link>
          <Link to="/textParapharse" className="text-white">
            Text Paraphrase
          </Link>
          <Link to="/textSummarize" className="text-white">
            Text Summarize
          </Link>
          <Link to="/textImprovement" className="text-white">
            Text Improvement
          </Link>
        </div>
        <div className="flex items-center gap-3 mr-[20px]">
          {!isLoggedIn ? (
            <>
              <Link
                to={"/login"}
                className="md:hover:border-[1.4px] border-[1px] p-1 md:p-5 text-[6px] h-[11.5px] flex items-center rounded-sm lg:rounded-lg capitalize text-white md:h-[20px] md:text-[10px] lg:text-[15px] lg:h-[45px] "
              >
                Log in
              </Link>
              <Link
                to={"/register"}
                className="md:hover:border-[1.4px] border-[1px] p-1 md:p-5 text-[6px] h-[11.5px] flex items-center rounded-sm lg:rounded-lg capitalize text-white mr-[1px] lg:mr-[72px] md:h-[20px] md:text-[10px] lg:text-[15px] lg:h-[45px] "
              >
                Sign up
              </Link>
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
