import React from 'react'

const Button = ({title}) => {
  return (
    <button className="bg-[#29245E] border border-white rounded-full p-3 flex items-center w-auto justify-center h-auto hover:bg-transparent duration-300">
      <a href="/" className="text-white outfit uppercase font-medium text-sm">{title}</a>
    </button>
  )
}

export default Button