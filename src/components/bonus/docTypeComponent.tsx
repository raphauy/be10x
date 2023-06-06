import React from 'react'
import { BsFiletypeDoc, BsFiletypePdf } from 'react-icons/bs'
import { FaFilePdf } from 'react-icons/fa'

interface Props{
    title: string
    text: string
    pdf?: boolean
    doc?: boolean
    worth: number
}
export default function DocTypeComponent({ title, text, pdf, doc, worth }: Props) {
  return (
    <div className='flex flex-col items-center h-full text-xl font-bold'>
        <div className='z-10 w-32 py-1 font-bold text-center bg-black rounded-md -mb-7 text-orange-be10x'>
            {title}
        </div>
        <div className='flex flex-col items-center flex-1 p-2 pt-10 text-center bg-gray-200 rounded-lg'>
            {pdf && <BsFiletypePdf size={45} className='my-5 text-red-600'/>}
            {doc && <BsFiletypeDoc size={45} className='my-5 text-red-600'/>}            
            <div>{text}</div>
        <div className='flex flex-col items-center px-12 py-3 mt-10 text-base text-center text-gray-600 border-2 border-gray-800 rounded-md '>
            <p>Worth</p>
            <p>₹{worth}</p>
        </div>
        </div>
    </div>
  )
}
