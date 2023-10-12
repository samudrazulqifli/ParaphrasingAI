import { Login } from "../axios/Login";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  username: string;
  password: string;
};
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    Login(data);
  };
  console.log(watch("username"));

  return (
    <>
      <div className="flex gap-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[330px] h-[425.19px] shadow-lg shadow-gray-900 px-[19px] font-poppins"
        >
          <div className="text-[20px] text-center mt-[16px] mb-[66px] font-bold text-[#1C1C1C]">
            Log in
          </div>
          <div className="text-[15.23px] font-bold text-[#1C1C1C] mb-[6.15px]">
            Username
          </div>
          <input
            {...register("username", { required: true })}
            type="text"
            placeholder="Enter Your Username"
            className="w-full rounded-[3.17px] h-[42.52px] text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
          />
          <div className="text-[15.23px] font-bold text-[#1C1C1C] mt-[8.5px] mb-[5.89px]">
            Password
          </div>
          <input
            type="text"
            placeholder="Enter Your Password"
            className="w-full rounded-[3.17px] h-[42.52px] text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
            {...register("password", { required: true })}
          ></input>
          {errors.password && <span>This field is required</span>}
          <div className="flex items-center gap-x-[1.9px] mt-[8.5px] mb-[9.16px]">
            <button className="bg-[#D9D9D9] rounded-[1.9px] w-[9.52px] h-[9.81px] bg-transparent font-bold p-0 border-none ring-0 focus:outline-none text-[15.23px]"></button>
            <div className="text-[15.23px] text-[#1C1C1C] font-normal">
              Remember Me
            </div>
          </div>
          <button
            type="submit"
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
        </form>
      </div>
    </>
  );
};

export default LoginPage;
