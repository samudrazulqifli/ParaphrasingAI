import logo from "../images/documentorai-05 3.svg";
const NavbarMenu = () => {
  return (
    <>
      <div className="grid grid-cols-4">
        <div className="col-span-2">
          <img
            src={logo}
            alt="logo"
            className="w-[18px] h-[17px] top-[17px] left-[18px] mx-4"
          />
        </div>
        <div className=" ml-24">
          <button className=" btn-outline text-[6px] rounded-sm capitalize text-white px-1 py-0  w-[33.69px] h-[11.5px] ">log in</button>
        </div>
        <div className="ml-10">
          <button className="btn-outline text-[6px] rounded-sm capitalize text-white px-[0.5px] py-0 w-[33.69px] h-[11.5px]">sign up</button>
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
