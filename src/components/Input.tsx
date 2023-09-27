
import { useState } from "react"

type InputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (newValue: string) => void;
  className?: string;

};


export function Input(props: InputProps, { ...rest }) {

  const [setValorInput, valorInput] = useState("")
  let text = "ola"

  return (
    <div className='flex w-full justify-center flex-col'>
      <label
        className="text-xl"
      >{props.label}
      </label>
      <input
        id='inputCity'
        type="text"
        value={text}
        placeholder={props.placeholder}
        className='mt-2 border-[#EEBCEE] border rounded-lg font-bold text-lg text-white bg-[#eebcee] px-2 py-1 
        placeholder-white
        hover:border-white '
        {...rest}
      >
      </input>
    </div>
  );
}