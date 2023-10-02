import logo from "../images/documentorai-05 3.svg";
import nav from "../images/Group 94.svg"
const NavbarMenu = () => {
  return (
    <>
      <div className="flex absolute justify-between w-full mt-[17px]">
        <div className="ml-[28px]">
          <img src={logo} alt="logo" className="w-[28px] md:w-[82px] " />
        </div>
        <div  className="hidden md:flex md:items-center gap-4 md:font-medium md:text-[16px]">
            <a href="/" className="text-white">Chat Pdf</a>
            <a href="/" className="text-white">Text Paraphrase</a>
            <a href="/" className="text-white">Text Summarize</a>
            <a href="/" className="text-white">Text Improvement</a>
        </div>
        <div className={`flex items-center gap-3 mr-[20px]`}>
          <button className="btn-outline text-[6px] h-[11.5px] flex items-center rounded-sm md:rounded-lg capitalize text-white md:text-[15px] md:h-[45px] ">
            Log in
          </button>
          <button className="btn-outline text-[6px] h-[11.5px] flex items-center rounded-sm md:rounded-lg capitalize text-white mr-[1px] md:mr-[72px] md:text-[15px] md:h-[45px] ">
            Sign up
          </button>
          <button className="md:inline-block btn-outline btn-xs border-none">
            <img src={nav} className="md:hidden" alt="nav" />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
