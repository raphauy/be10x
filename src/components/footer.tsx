"use client"

import RunningOutFooter from "./runningOutFooter"

interface Props{
    date: string
}  

export default function Footer({ date }: Props) {
  return (
    <div className='fixed bottom-0 left-0 flex justify-center w-full h-20 bg-grey-be10x'>
        <div className="flex items-center justify-between w-full max-w-6xl text-3xl text-white">
            <div className='grid items-center w-full grid-cols-2 md:grid-cols-6 lg:grid-cols-7'>
                <p className="ml-4 text-2xl font-bold text-orange-be10x whitespace-nowrap">Rs. 299</p>
                <p className="ml-6 text-2xl font-bold text-white line-through whitespace-nowrap">Rs. 1499</p>
                <p className="ml-6 text-lg text-white whitespace-nowrap">Offer Ends In </p>
                <RunningOutFooter targetDateTime={date} />
            </div>
            <div className="w-40 p-3 mr-3 text-sm text-center text-white rounded-md cursor-pointer bg-orange-be10x">
                <p>Be 10X Now</p>
            </div>
        </div>
    </div>
  )
}
