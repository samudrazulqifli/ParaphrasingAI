const Iklan = () => {
  return (
    <>
      <div className="md:w-[243px] w-[97px] absolute md:h-[1030px] h-[322px] right-0 md:top-[363px] top-[180px] bg-white rounded-[5px]">
        <div className="flex justify-center">
          <div className="grid-cols-4">
            <div className="border-[2px] w-[86.63px] h-[115.77px] mt-1 md:border-[3px] md:w-[217px] md:h-[292.28px] md:mt-2 bg-[#0B5882]">
              <div className="flex justify-center mt-[5%]">
                <div className="text-center">
                  <div className="text-[5.99px] md:text-[15px] font-medium ">
                    JOIN
                  </div>
                  <div className="text-[9.98px] md:text-[25px] font-semibold ">
                    THOUSANDS
                  </div>
                  <div className="text-[5.59px] md:text-[12px] font-normal ">
                    of others and get the latest marketing articles delivered by
                    email and get the ABC of inbound marketing ebook for free
                  </div>
                  <div className="flex-col flex items-center gap-1 mt-[8%]">
                    <label
                      htmlFor="Email"
                      className="text-[4.79px] font-normal rounded-[0.8px] self-start ml-[8%] md:text-[12px]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-[69.06px] h-[11.58px] md:w-[173px] md:h-[29.23px] bg-transparent rounded-[2px] border-white border-[2px] "
                    />
                    <button className="text-center md:text-[10px] text-black font-semibold bg-[#F1F1F1] text-[3.99px] w-[69.06px] h-[14.77px] rounded-[2px]  md:w-[173px] md:h-[37.29px]">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[2px] w-[85.83px] h-[53.5px] mt-1 md:border-[3px] md:w-[215px] md:h-[134px] md:mt-2 bg-[#0B5882]">
              <div className="flex justify-center mt-[5%]">
                <div className="text-center">
                  <div className="text-[5.99px] md:text-[15px] font-medium">
                    Wordpress 101
                  </div>
                  <div className="text-[3.99px] md:text-[10px] font-normal ">
                    What to know
                  </div>
                  <div className="font-semibold text-[5.99px] md:text-[15px] mt-[4%]">
                    {new Date().toLocaleDateString("en-us", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <button className="text-center md:text-[10px] text-black font-semibold bg-[#F1F1F1] text-[3.99px] w-[51.5px] h-[13.17px] md:rounded-[5px]  md:w-[129px] md:h-[33px]">
                    Register
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="bg-lampion_bg border-[2px] h-[126.95px] w-[87.03px] mt-1 md:border-[3px] md:w-[218px] md:h-[320.5px] md:mt-2 ">
                <div className="flex justify-center absolute mt-[8%]">
                  <div className="text-center">
                    <div className="font-normal text-[4.79px] md:text-[12px]">
                      Visit our
                    </div>
                    <div className="text-[9.98px] font-medium md:text-[25px] ">
                      LEARNING CENTER
                    </div>
                    <div className="font-normal text-[4.79px] md:text-[12px]">
                      for more
                    </div>
                    <div className="text-[7.98px] font-medium md:text-[20px]">
                      Free Resources
                    </div>
                    <button className="text-center mt-[12%] md:text-[20px]  font-semibold bg-[#0B5882] text-[7.98px] w-[27.15px] h-[20.76px] md:rounded-[5px]  md:w-[68px] md:h-[52px]">
                      Go
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:border-[3px] md:w-[215px] md:h-[210px] md:mt-2 bg-[#EEEEEE]"></div>
          </div>
        </div>
      </div>
      <div className="md:w-[243px] w-[97px] absolute md:h-[1030px] h-[322px] left-0 md:top-[363px] top-[180px] bg-white rounded-[5px]">
      <div className="flex justify-center">
          <div className="grid-cols-4">
            <div className="border-[2px] w-[86.63px] h-[115.77px] mt-1 md:border-[3px] md:w-[217px] md:h-[292.28px] md:mt-2 bg-[#0B5882]">
              <div className="flex justify-center mt-[5%]">
                <div className="text-center">
                  <div className="text-[5.99px] md:text-[15px] font-medium ">
                    JOIN
                  </div>
                  <div className="text-[9.98px] md:text-[25px] font-semibold ">
                    THOUSANDS
                  </div>
                  <div className="text-[5.59px] md:text-[12px] font-normal ">
                    of others and get the latest marketing articles delivered by
                    email and get the ABC of inbound marketing ebook for free
                  </div>
                  <div className="flex-col flex items-center gap-1 mt-[8%]">
                    <label
                      htmlFor="Email"
                      className="text-[4.79px] font-normal rounded-[0.8px] self-start ml-[8%] md:text-[12px]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-[69.06px] h-[11.58px] md:w-[173px] md:h-[29.23px] bg-transparent rounded-[2px] border-white border-[2px] "
                    />
                    <button className="text-center md:text-[10px] text-black font-semibold bg-[#F1F1F1] text-[3.99px] w-[69.06px] h-[14.77px] rounded-[2px]  md:w-[173px] md:h-[37.29px]">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[2px] w-[85.83px] h-[53.5px] mt-1 md:border-[3px] md:w-[215px] md:h-[134px] md:mt-2 bg-[#0B5882]">
              <div className="flex justify-center mt-[5%]">
                <div className="text-center">
                  <div className="text-[5.99px] md:text-[15px] font-medium">
                    Wordpress 101
                  </div>
                  <div className="text-[3.99px] md:text-[10px] font-normal ">
                    What to know
                  </div>
                  <div className="font-semibold text-[5.99px] md:text-[15px] mt-[4%]">
                    {new Date().toLocaleDateString("en-us", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <button className="text-center md:text-[10px] text-black font-semibold bg-[#F1F1F1] text-[3.99px] w-[51.5px] h-[13.17px] md:rounded-[5px]  md:w-[129px] md:h-[33px]">
                    Register
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="bg-lampion_bg border-[2px] h-[126.95px] w-[87.03px] mt-1 md:border-[3px] md:w-[218px] md:h-[320.5px] md:mt-2 ">
                <div className="flex justify-center absolute mt-[8%]">
                  <div className="text-center">
                    <div className="font-normal text-[4.79px] md:text-[12px]">
                      Visit our
                    </div>
                    <div className="text-[9.98px] font-medium md:text-[25px] ">
                      LEARNING CENTER
                    </div>
                    <div className="font-normal text-[4.79px] md:text-[12px]">
                      for more
                    </div>
                    <div className="text-[7.98px] font-medium md:text-[20px]">
                      Free Resources
                    </div>
                    <button className="text-center mt-[12%] md:text-[20px]  font-semibold bg-[#0B5882] text-[7.98px] w-[27.15px] h-[20.76px] md:rounded-[5px]  md:w-[68px] md:h-[52px]">
                      Go
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:border-[3px] md:w-[215px] md:h-[210px] md:mt-2 bg-[#EEEEEE]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Iklan;
