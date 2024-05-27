import React from 'react'

export const Button = ({buttonName,className}) => {
  return (
    <button className={`border rounded-[40px] border-[#D9D9D9] uppercase font-medium font-nunito text-sm py-1 1 px-4 ${className}`}>
        {buttonName}
    </button>
  )
}

export default Button