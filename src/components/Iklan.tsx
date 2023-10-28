import { useState } from "react";
import LoginModal from "./modal/LoginModal";
import RegisterModal from "./modal/RegisterModal";

const Iklan = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <>
      <LoginModal
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        setShowRegister={setShowRegister}
      />
      <RegisterModal
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        setShowLogin={setShowLogin}
      />
      <div className="md:w-[243px] w-[97px] absolute md:h-[1030px] h-[322px] right-0 md:top-[363px] top-[180px] bg-white rounded-[5px]">
        <div className="flex justify-center">
          <div className="grid-cols-4">
            <div className="border-[2px] w-[86.63px] h-[115.77px] mt-1 md:border-[3px] md:w-[217px] md:h-[292.28px] md:mt-2">
              <div className="flex justify-center mt-[5%]">
                <div className="text-center">
                  {/* fill your ads over here */}
                </div>
              </div>
            </div>
            <div className="border-[2px] w-[85.83px] h-[53.5px] mt-1 md:border-[3px] md:w-[215px] md:h-[134px] md:mt-2">
              <div className="flex justify-center mt-[5%]">
                <div className="text-center">
                  {/* fill your ads over here */}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0"></div>
              <div className=" border-[2px] h-[126.95px] w-[87.03px] mt-1 md:border-[3px] md:w-[218px] md:h-[320.5px] md:mt-2 ">
                <div className="flex justify-center absolute mt-[8%]">
                  <div className="text-center">
                    {/* fill your ads over here */}
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
            <div className="border-[2px] w-[86.63px] h-[115.77px] mt-1 md:border-[3px] md:w-[217px] md:h-[292.28px] md:mt-2">
              <div className="flex justify-center mt-[5%]">
                <div className="text-center">
                  {/* fill your ads over here */}
                </div>
              </div>
            </div>
            <div className="border-[2px] w-[85.83px] h-[53.5px] mt-1 md:border-[3px] md:w-[215px] md:h-[134px] md:mt-2">
              <div className="flex justify-center mt-[5%]">
                <div className="text-center">
                  {/* fill your ads over here */}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0"></div>
              <div className=" border-[2px] h-[126.95px] w-[87.03px] mt-1 md:border-[3px] md:w-[218px] md:h-[320.5px] md:mt-2 ">
                <div className="flex justify-center absolute mt-[8%]">
                  <div className="text-center">
                    {/* fill your ads over here */}
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
