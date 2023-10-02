import NavbarMenu from "./Navbar";

const Header = () => {
  return (
    <section className="bg-gradient-to-r from-[#5B68DF] to-[#00FFD1] w-full h-[189px] md:h-[682px]">
      <div className="relative">
        <NavbarMenu></NavbarMenu>
      </div>
      <div className="text-white pt-8">
        <div className="flex text-center justify-center px-[58px] w-full mt-4 text-[20.59px] md:text-[70px] md:mt-24 md:px-[160px] font-bold md:font-semibold">
          Create Powerful Content That Matters
        </div>
        <div className="w-full text-center flex justify-center font-normal mt-[12px] text-[8.32px] px-[80px] md:text-[22px] md:mt-[50.07px]">
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
