import arrowright from "../assets/images/right-arrows.png";

const GetStarted = () => {
  return (
    <>
      <div className="bg-[#03FFFE] md:max-w-[190px] md:h-[41px] max-w-[47.38px] h-[10.22px] md:rounded-md rounded-sm flex flex-col justify-center items-center">
        <div className="flex md:gap-3 gap-1 justify-center">
          <div className="font-semibold md:text-[15px] text-[3.74px]">
            Get Started
          </div>
          <img src={arrowright} className="md:h-[23px] md:w-[23px] h-[4.71px] w-[4.71px]" alt="" />
        </div>
      </div>
    </>
  );
};

export default GetStarted;
