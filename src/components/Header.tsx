import NavbarMenu from "./Navbar";

const Header = () => {
  return (
    <section className="bg-header_bg bg-cover w-full h-[189px] md:h-[396px] lg:h-[682px]">
      <div className="relative">
        <NavbarMenu></NavbarMenu>
      </div>
      <div className="text-white pt-8">
        <div className=" text-center px-[60px] w-full mt-5 text-[20.59px] md:text-[50px] lg:text-[70px] lg:mt-24 lg:px-[120px] font-bold lg:font-semibold">
          Create <span className="text-[#33FFFE]"> Powerful</span> Content That
          Matters
        </div>

        <div className="w-full text-center flex justify-center font-normal mt-[12px] text-[8.32px] px-[80px] md:text-[15px] md:px-[180px] md:mt-[34px] lg:text-[22px] lg:mt-[50.07px]">
          <p>
            Discover how to establish strong connections with your target
            audience by utilizing our complimentary resources and content
            marketing tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
