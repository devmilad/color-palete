"use client"

import { lighten } from 'polished'
import { useEffect, useState } from 'react'


const ListItem = ({color}:{color:number[]} )=> {
  const [colorSchema, setColorSchema] = useState("")
  const [copied, setCopied] = useState(false)

  const toHex =() =>{
    const hex = color.map((value) => {
        const hexValue = value.toString(16);
        return hexValue.length === 1 ? `0${hexValue}` : hexValue;
      });
      setColorSchema(`#${hex.join('')}`)
  }

useEffect(() => {
    toHex()
}, [color])


const copyToClipboard =(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>{
    const Cp= e.currentTarget.innerText
    navigator.clipboard.writeText(Cp)
}


const antiColor = String(lighten(0.5, `rgb(${color.join(', ')})`));

  return (
    <li className='relative list-none w-64 h-64 rounded-lg shadow-md transition-all ease-in-out delay-300 hover:translate-y-[-5px]' style={{ background: colorSchema }}>
        <span
            onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>{
                copyToClipboard(e);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 1000);
              
            }}
            className='cursor-pointer py-2 px-4 w-full absolute bottom-0 border-t-2 border-t-gray-900 rounded-b-lg flex items-center justify-between font-semibold  '
            style={{ color :antiColor }}
        >
            {copied ? "copied!" : colorSchema}<i className='bx bx-copy text-xl'></i>
        </span>
    </li>
  )
}

export default ListItem
