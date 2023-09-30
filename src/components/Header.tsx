import NavbarMenu from "./Navbar";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#5B68DF] from-15% to-[#00FFD1] to-100% w-[390px] h-[189px] ">
      <div className="py-3">
        <NavbarMenu></NavbarMenu>
      </div>
      <div className="py-2">
        <h1 className="text-white text-center  px-14  font-bold text-[20.59px]">
          Create <span className="text-[#33FFFE]">Powerful</span> Content That
          Matters
        </h1>
        <div className="w-[300px] h-[39.73px] my-3 px-4 ml-10 text-[8.32px] font-normal text-center text-white">
          <p>
            Discover how to establish strong connections with your target
            audience by utilizing our complimentary resources
          </p>
          <span>and content marketing tools.</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
