import React from "react";

const LoginPage = () => {
  return (
    <div className="flex gap-8">
      <div className="w-[330px] h-[425.19px] shadow-lg shadow-gray-900 px-[19px] font-poppins">
        <div className="text-[20px] text-center mt-[16px] mb-[66px] font-bold text-[#1C1C1C]">
          Log in
        </div>
        <div className="text-[15.23px] font-bold text-[#1C1C1C] mb-[6.15px]">
          Username
        </div>
        <input
          type="text"
          placeholder="Enter Your Username"
          className="w-full rounded-[3.17px] h-[42.52px] text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
        ></input>
        <div className="text-[15.23px] font-bold text-[#1C1C1C] mt-[8.5px] mb-[5.89px]">
          Password
        </div>
        <input
          type="text"
          placeholder="Enter Your Password"
          className="w-full rounded-[3.17px] h-[42.52px] text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
        ></input>
        <div className="flex items-center gap-x-[1.9px] mt-[8.5px] mb-[9.16px]">
          <button className="bg-[#D9D9D9] rounded-[1.9px] w-[9.52px] h-[9.81px] bg-transparent font-bold p-0 border-none ring-0 focus:outline-none text-[15.23px]"></button>
          <div className="text-[15.23px] text-[#1C1C1C] font-normal">
            Remember Me
          </div>
        </div>
        <button
          type="button"
          className="h-[42.52px] w-full rounded-[3.17px] bg-[#3495CE] text-white text-[15.23px] font-bold border-none ring-0 focus:outline-none"
        >
          Log in
        </button>
        <div className="text-[15.23px] text-[#1C1C1C] mt-[26.82px] font-normal text-center">
          Don’t have an account?
        </div>
        <div className="grid">
          <button className="text-[#3495CE] justify-self-center text-center bg-transparent font-bold p-0 border-none ring-0 focus:outline-none text-[15.23px]">
            Sign up
          </button>
        </div>
      </div>

      <div className="w-[330px] h-[425.19px] shadow-lg shadow-gray-900 px-[19px] font-poppins">
        <div className="text-[20px] text-center mt-[16px] mb-[66px] font-bold text-[#1C1C1C]">
          Sign up
        </div>
        <div className="text-[15.23px] font-bold text-[#1C1C1C] mb-[6.15px]">
          Username
        </div>
        <input
          type="text"
          placeholder="Enter Your Username"
          className="w-full rounded-[3.17px] h-[42.52px] text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
        ></input>
        <div className="text-[15.23px] font-bold text-[#1C1C1C] mt-[8.5px] mb-[5.89px]">
          Password
        </div>
        <input
          type="text"
          placeholder="At least 8 characters"
          className="w-full rounded-[3.17px] h-[42.52px] text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
        ></input>
        <div className="flex items-center gap-x-[1.9px] mt-[8.5px] mb-[9.16px]">
          <button className="bg-[#D9D9D9] rounded-[1.9px] w-[9.52px] h-[9.81px] bg-transparent font-bold p-0 border-none ring-0 focus:outline-none text-[15.23px]"></button>
          <div className="text-[15.23px] text-[#1C1C1C] font-normal">
            I agree with <span><a className="text-black underline hover:text-black" href="">Terms</a></span> and <span><a className="text-black underline hover:text-black" href="">Privacy</a></span>
          </div>
        </div>
        <button
          type="button"
          className="h-[42.52px] w-full rounded-[3.17px] bg-[#3495CE] text-white text-[15.23px] font-bold border-none ring-0 focus:outline-none"
        >
          Log in
        </button>
        <div className="text-[15.23px] text-[#1C1C1C] mt-[26.82px] font-normal text-center">
          Already have an account?
        </div>
        <div className="grid">
          <button className="text-[#3495CE] justify-self-center text-center bg-transparent font-bold p-0 border-none ring-0 focus:outline-none text-[15.23px]">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
