import { useEffect } from "react";
import imgClose from "../../assets/images/close.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormRegister } from "../../interface/api/IFormInput";
import { register as registerUser } from "../../redux/feature/auth";
import { useAppDispatch, useAppSelector } from "../../redux/feature/hooks";
import ComponentReactLoading from "../loading/ComponentReactLoading";

const RegisterModal = ({
  showRegister,
  setShowRegister,
  setShowLogin,
}: any) => {
  const { register, handleSubmit } = useForm<IFormRegister>();
  const { loading, finish } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (showRegister == false) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {};
  }, [showRegister]);

  const onSubmit: SubmitHandler<IFormRegister> = (data) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    if (finish) {
      setShowRegister(false);
    }
  }, [finish]);

  return (
    <>
      {showRegister ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-[330px] h-[520px] mx-auto mt-[3%] px-[19px] font-poppins bg-white rounded-md pt-2 relative">
                <button
                  type="button"
                  onClick={() => {
                    setShowRegister(false);
                  }}
                  className="p-0 md:h-[22.64px] h-[9.02px] md:w-[22.64px] w-[8.96px] inset-y-0 border-none focus:outline-none absolute md:top-[5.22px] top-[2.01px] md:right-[18.39px] right-[7.78px]"
                >
                  <img src={imgClose} alt="" />
                </button>
                <div className="text-[20px] text-center mt-[16px] mb-[30px] font-bold text-[#1C1C1C]">
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
                  className="w-full rounded-[3.17px]  bg-white h-[42.52px] text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
                ></input>
                <div className="text-[15.23px] font-bold text-[#1C1C1C] mt-[8.5px] mb-[5.89px]">
                  Password
                </div>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="At least 8 characters"
                  className="w-full rounded-[3.17px]  bg-white h-[42.52px] text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
                ></input>
                <div className="flex items-center gap-x-[1.9px] mt-[8.5px] mb-[9.16px]">
                  <button className="bg-[#D9D9D9] rounded-[1.9px] w-[9.52px] h-[9.81px] bg-transparent font-bold p-0 border-none ring-0 focus:outline-none text-[15.23px]"></button>
                  <div className="text-[15.23px] text-[#1C1C1C] font-normal">
                    I agree with{" "}
                    <span>
                      <a
                        className="text-black underline hover:text-black"
                        href=""
                      >
                        Terms
                      </a>
                    </span>{" "}
                    and{" "}
                    <span>
                      <a
                        className="text-black underline hover:text-black"
                        href=""
                      >
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
                    onClick={() => {
                      setShowRegister(false);
                      setShowLogin(true);
                    }}
                    className="text-[#3495CE] justify-self-center text-center bg-transparent font-bold p-0 border-none ring-0 focus:outline-none text-[15.23px]"
                  >
                    Log in
                  </button>
                </div>
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

export default RegisterModal;
