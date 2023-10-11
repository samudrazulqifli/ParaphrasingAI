import imgIcon from "../../assets/images/ic-check.png";

const GenerateIntantly = () => {
  return (
    <>
      <div className="md:w-[397px] w-[87.83px] md:h-[216px] h-[47.79px] md:rounded-[20px] rounded-[4.42px] flex items-start md:py-[48px] py-[10.62px] bg-[#035687]">
        <div className="md:w-[20px] w-[4.42px] md:h-[20px] h-[4.42px] mt-1 bg-[#047AC0] md:ml-[26px] ml-[5.75px] md:mr-[25px] mr-[5.53px] grid content-center rounded-full">
          <img className="md:w-[12px] w-[2.65px] md:h-[8px] h-[1.77px] m-auto" src={imgIcon} alt="" />
        </div>
        <div className="md:text-[18px] text-[3.98px]">
          Generate{" "}
          <span className="font-semibold">
            unique, instantly<br></br>tailored
          </span>{" "}
          content to suit your
          <br></br>
          online needs across various<br></br>platforms.
        </div>
      </div>
    </>
  );
};

export default GenerateIntantly;
