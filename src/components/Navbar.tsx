import logo from "../images/documentorai-05 3.svg";
import nav from "../images/Group 94.svg"
const NavbarMenu = () => {
  return (
    <>
      <div className="flex absolute justify-between w-full mt-[17px]">
        <div className="ml-[28px]">
          <img src={logo} alt="logo" className="w-[28px] lg:w-[82px] md:w-[45px] " />
        </div>
        <div  className="hidden md:flex md:items-center lg:flex lg:items-center gap-4 lg:font-medium md:text-[10px] lg:text-[16px]">
            <a href="/" className="text-white">Chat Pdf</a>
            <a href="/" className="text-white">Text Paraphrase</a>
            <a href="/" className="text-white">Text Summarize</a>
            <a href="/" className="text-white">Text Improvement</a>
        </div>
        <div className="flex items-center gap-3 mr-[20px]">
          <button className=" border-[1px] btn-outline p-1 md:p-5 text-[6px] h-[11.5px] flex items-center rounded-sm lg:rounded-lg capitalize text-white md:h-[20px] md:text-[10px] lg:text-[15px] lg:h-[45px] ">
            Log in
          </button>
          <button className="border-[1px] btn-outline p-1 md:p-5 text-[6px] h-[11.5px] flex items-center rounded-sm lg:rounded-lg capitalize text-white mr-[1px] lg:mr-[72px] md:h-[20px] md:text-[10px] lg:text-[15px] lg:h-[45px] ">
            Sign up
          </button>
          <button className="md:inline-block lg:inline-block btn-outline btn-xs border-none">
            <img src={nav} className="lg:hidden md:hidden" alt="nav" />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
