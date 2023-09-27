import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export function Button(Props: ButtonProps, { ...rest }) {
  return (
    <div className='flex w-full justify-center'>
      <button
        id='btnSearch'
        type='button'
        className='border-primary border-2 rounded-lg font-bold text-2xl text-white bg-primary px-2 py-1 mt-2
      hover:border-white
        active:opacity-70'
        {...rest}>
        Buscar
      </button>
    </div >
  );
}