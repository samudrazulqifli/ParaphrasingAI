import { useEffect } from "react";
import imgClose from "../../assets/images/close.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormLogin } from "../../interface/api/IFormInput";
import { login } from "../../redux/feature/auth";
import { useAppDispatch, useAppSelector } from "../../redux/feature/hooks";
import ComponentReactLoading from "../loading/ComponentReactLoading";

const LoginModal = ({ showLogin, setShowLogin, setShowRegister }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>();
  const { loading, finish } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (showLogin == false) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {};
  }, [showLogin]);

  useEffect(() => {
    if (finish) {
      setShowLogin(false);
    }
  }, [finish]);

  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    dispatch(login(data));
  };

  return (
    <>
      {showLogin ? (
        <>
          <div className="justify-center text-black items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[330px] mx-auto mt-[3%] px-[19px] bg-white rounded-md shadow-sm font-poppins relative"
            >
              <button
                type="button"
                onClick={() => {
                  setShowLogin(false);
                }}
                className="p-0 md:h-[22.64px] h-[9.02px] md:w-[22.64px] w-[8.96px] inset-y-0 border-none focus:outline-none absolute md:top-[5.22px] top-[2.01px] md:right-[18.39px] right-[7.78px]"
              >
                <img src={imgClose} alt="" />
              </button>
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
                className="w-full rounded-[3.17px] h-[42.52px] bg-white text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
              />
              {errors.username && <span>This field is required</span>}
              <div className="text-[15.23px] font-bold text-[#1C1C1C] mt-[8.5px] mb-[5.89px]">
                Password
              </div>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full rounded-[3.17px] h-[42.52px] bg-white text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                })}
              ></input>
              {errors.password && <span>This field is required</span>}
              <div className="flex items-center gap-x-[1.9px] mt-[8.5px] mb-[9.16px]">
                {/* <input type="checkbox" className="bg-white" {...register("")}/> */}
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
                <button
                  type="button"
                  onClick={() => {
                    setShowRegister(true);
                    setShowLogin(false);
                  }}
                  className="text-[#3495CE] justify-self-center text-center bg-transparent font-bold p-0 border-none ring-0 focus:outline-none text-[15.23px]"
                >
                  Sign up
                </button>
              </div>
            </form>
            {loading ? (
              <ComponentReactLoading
                height={700}
                width={700}
                addClass={"mx-auto absolute"}
              />
            ) : null}
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default LoginModal;
