import { useState, useEffect } from "react";
import { DataCardTextProps } from "../interface/DataCardText";
import { ResultForm, ResultForm2 } from "../interface/api/IFormInput";

type Props = DataCardTextProps;

const CardText: React.FC<Props> = (props: any) => {
  const {
    title1,
    title2,
    button,
    form,
    data,
    option,
    selected,
    loading,
    status,
    addClass,
  } = props as DataCardTextProps;
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);
  const [value, setValue] = useState<string>();

  useEffect(() => {
    resultChange(data as ResultForm);
  }, [data as ResultForm]);

  const wordChange = (e: { target: { value: string } }) => {
    let word = e.target.value.split(" ").length;
    if (e.target.value.split(" ")[word - 1] === "") {
      word = word - 1;
    }
    setCount(word);
  };
  const resultChange = (textInput?: ResultForm | ResultForm2) => {
    if (textInput) {
      let updatedValue = "";
      let data;

      if ("data" in textInput) {
        data = textInput.data;
      } else if ("suggestions" in textInput) {
        data = textInput.suggestions;
      } else {
        console.error("Unknown data structure");
        return;
      }

      data.map((item, index) => {
        const optionLabel = `option ${index + 1} : `;
        updatedValue += optionLabel + item.text + "\n" + "\n";
        const words = item.text.split(" ").length;
        setResult(words);
      });

      setValue(updatedValue);
    }
  };
  return (
    <>
      <div className=" flex justify-center md:grid-cols-2 md:grid card rounded-md md:rounded-[20px] md:shadow-xl shadow-md w-[185px] h-[242px] bg-white md:w-[895px] md:h-[499px] ">
        <div className="ml-4 mb-1 md:mt-[20px] md:ml-[60px]">
          <h2 className="text-[5px] text-[#4E4E4E] font-bold mb-1 md:text-[15px]">
            {title1}
          </h2>
          <div className="text-[5px] md:text-[15px] md:mt-[310px] md:ml-[20px] font-medium absolute ml-[6px] mt-[77px] text-[#A7A7A7]">
            {count}/200
          </div>
          <textarea
            className="resize-none text-black text-[5px] textarea-xs md:textarea-md w-[157px] md:w-[377px] h-[85px] md:h-[332px] border-[0.9px] rounded-sm md:rounded-[10px] bg-white placeholder:text-[5px] md:placeholder:text-[15px]"
            placeholder="Begin typing or paste text here..."
            {...form}
            onChange={wordChange}
          ></textarea>
        </div>
        <div className="ml-4 md:mt-[20px]">
          <h2 className="text-[5px] text-[#4E4E4E] font-bold mb-1 md:text-[15px]">
            {title2}
          </h2>
          <div className="text-[5px] md:text-[15px] md:mt-[310px] md:ml-[20px] font-medium absolute ml-[6px] mt-[77px] text-[#A7A7A7]">
            {result}/200
          </div>
          {status === true ? (
            <>
              <textarea className="resize-none text-black text-[5px] textarea-xs md:textarea-md w-[157px] md:w-[377px] h-[85px] md:h-[332px] border-[0.9px] rounded-sm md:rounded-[10px] bg-white placeholder:text-[5px] md:placeholder:text-[15px]" />
              {loading}
            </>
          ) : (
            <textarea
              className="resize-none text-black text-[5px] textarea-xs md:textarea-md w-[157px] md:w-[377px] h-[85px] md:h-[332px] border-[0.9px] rounded-sm md:rounded-[10px] bg-white placeholder:text-[5px] md:placeholder:text-[15px]"
              defaultValue={value}
            />
          )}
          <div
            className={`top-[2%] left-[80%] absolute text-[4.8px] md:text-[15px] ${addClass}`}
          >
            <select {...selected} className="bg-white text-black rounded-sm">
              {option.map((item, index) => (
                <>
                  <option key={index} value={item.option}>
                    {item.option}
                  </option>
                  ;
                </>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full flex justify-center md:col-span-2 mt-[3px]">
          <button
            className={`flex justify-center items-center border-[#047AC0] border-[0.54px] rounded-[1.35px] w-[34.13px] h-[13px] text-[4.06px] text-[#3E3E3E] font-extrabold md:text-[15px] md:w-[126px] md:h-[43px] md:rounded-[5px] 
            ${count === 0 ? "btn-disabled" : ""}`}
            type="submit"
          >
            {button}
          </button>
        </div>
      </div>
    </>
  );
};

export default CardText;
