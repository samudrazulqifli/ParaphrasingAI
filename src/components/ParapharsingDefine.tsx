import React from "react";
import { DataTextParapharsingDefine } from "../interface/DataTextParapharsingDefine";

type Props = DataTextParapharsingDefine;
const ParapharsingDefine: React.FC<Props> = (props: any) => {
  const { title, description } = props as DataTextParapharsingDefine;
  return (
    <div className="flex justify-center">
      <div className="text-[#4E4E4E] md:w-[600px] md:space-y-10 space-y-1 w-[191px] text-center">
        <div className="md:text-[25px] text-[9.75px] font-semibold">{title}</div>
        <div className="md:text-[18px] text-[5px] font-normal ">{description}</div>
      </div>
    </div>
  );
};

export default ParapharsingDefine;
