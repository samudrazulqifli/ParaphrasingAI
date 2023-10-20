import { useForm, SubmitHandler } from "react-hook-form";
import { IFormRegister } from "../interface/api/IFormInput";
import { useAppDispatch } from "../redux/feature/hooks";

import { register as registerUser } from "../redux/feature/auth";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<IFormRegister>();

  const dispatch = useAppDispatch();

  const navigation = useNavigate();

  const onSubmit: SubmitHandler<IFormRegister> = (data) => {
    dispatch(registerUser(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[330px] h-[500px] mx-auto mt-[3%] px-[19px] font-poppins">
          <div className="text-[20px] text-center mt-[16px] mb-[66px] font-bold text-[#1C1C1C]">
            Sign up
          </div>
          <div className="text-[15.23px] font-bold text-[#1C1C1C] mb-[6.15px]">
            Username
          </div>
          <input
            {...register("username")}
            type="text"
            placeholder="Enter Your Username"
            className="w-full rounded-[3.17px] bg-white h-[42.52px] text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
          ></input>
          <div className="text-[15.23px] font-bold text-[#1C1C1C] mt-[8.5px] mb-[5.89px]">
            Name
          </div>
          <input
            {...register("name")}
            type="text"
            placeholder="At least 8 characters"
            className="w-full rounded-[3.17px] bg-white h-[42.52px] text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
          ></input>
          <div className="text-[15.23px] font-bold text-[#1C1C1C] mt-[8.5px] mb-[5.89px]">
            Password
          </div>
          <input
            {...register("password")}
            type="text"
            placeholder="At least 8 characters"
            className="w-full rounded-[3.17px] bg-white h-[42.52px] text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
          ></input>
          <div className="flex items-center gap-x-[1.9px] mt-[8.5px] mb-[9.16px]">
            <button className="bg-[#D9D9D9] rounded-[1.9px] w-[9.52px] h-[9.81px] bg-transparent font-bold p-0 border-none ring-0 focus:outline-none text-[15.23px]"></button>
            <div className="text-[15.23px] text-[#1C1C1C] font-normal">
              I agree with{" "}
              <span>
                <a className="text-black underline hover:text-black" href="">
                  Terms
                </a>
              </span>{" "}
              and{" "}
              <span>
                <a className="text-black underline hover:text-black" href="">
                  Privacy
                </a>
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="h-[42.52px] w-full rounded-[3.17px] bg-[#3495CE] text-white text-[15.23px] font-bold border-none ring-0 focus:outline-none"
          >
            Sign up
          </button>
          <div className="text-[15.23px] text-[#1C1C1C] mt-[26.82px] font-normal text-center">
            Already have an account?
          </div>
          <div className="grid">
            <button
              onClick={() => navigation("/login", { replace: true })}
              className="text-[#3495CE] justify-self-center text-center bg-transparent font-bold p-0 border-none ring-0 focus:outline-none text-[15.23px]"
            >
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
