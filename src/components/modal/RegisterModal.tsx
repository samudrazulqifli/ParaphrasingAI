import { useEffect, useState } from "react";
import imgClose from "../../assets/images/close.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormRegister } from "../../interface/api/IFormInput";
import { register as registerUser } from "../../redux/feature/auth";
import { useAppDispatch, useAppSelector } from "../../redux/feature/hooks";
import ComponentReactLoading from "../loading/ComponentReactLoading";
import { LiaEyeSolid, LiaEyeSlash } from "react-icons/lia";

const RegisterModal = ({
  showRegister,
  setShowRegister,
  setShowLogin,
}: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>();
  const { loading, finish } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
              <div className="w-[330px] text-black mx-auto mt-[3%] px-[19px] font-poppins bg-white rounded-md pt-2 relative">
                <button
                  type="button"
                  onClick={() => {
                    setShowRegister(false);
                  }}
                  className="p-0 md:h-[22.64px] h-[15px] md:w-[22.64px] w-[15px] inset-y-0 border-none focus:outline-none absolute md:top-[5.22px] top-[2.01px] md:right-[18.39px] right-[7.78px]"
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
                  aria-invalid={errors.username ? "true" : "false"}
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  placeholder="Enter Your Username"
                  className="w-full rounded-[3.17px] bg-white h-[42.52px] text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
                ></input>
                {errors.username && (
                  <p role="alert" className="text-red-500">
                    {errors.username.message}
                  </p>
                )}
                <div className="text-[15.23px] font-bold text-[#1C1C1C] mt-[8.5px] mb-[5.89px]">
                  Name
                </div>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="At least 8 characters"
                  className="w-full rounded-[3.17px]  bg-white h-[42.52px] text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
                ></input>
                {errors.name && (
                  <p role="alert" className="text-red-500">
                    {errors.name.message}
                  </p>
                )}
                <div className="text-[15.23px] font-bold text-[#1C1C1C] mt-[8.5px] mb-[5.89px]">
                  Password
                </div>
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Minimum 8 Characters required",
                      },
                      maxLength: {
                        value: 20,
                        message: "Maximum 20 Characters required",
                      },
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="At least 8 characters"
                    className="w-full rounded-[3.17px]  bg-white h-[42.52px] text-black border-[#8d8d8d] border-[1.27px] px-[9.52px] focus:outline-none"
                  ></input>
                  {errors.password && (
                    <p role="alert" className="text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-[16%] left-[85%]"
                  >
                    {!showPassword ? (
                      <LiaEyeSlash fontSize="1.5em" />
                    ) : (
                      <LiaEyeSolid fontSize="1.5em" />
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-x-[1.9px] mt-[8.5px] mb-[9.16px]">
                  <input
                    type="checkbox"
                    className="appearance-none h-4 w-4 rounded-sm cursor-pointer bg-white border border-black text-black focus:ring-2"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
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
                  className={`h-[42.52px] w-full rounded-[3.17px] bg-[#3495CE] text-white text-[15.23px] font-bold border-none ring-0 focus:outline-none ${
                    !checked ? "btn-disabled" : ""
                  }`}
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
                    className="mb-6 text-[#3495CE] justify-self-center text-center bg-transparent font-bold p-0 border-none ring-0 focus:outline-none text-[15.23px]"
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
