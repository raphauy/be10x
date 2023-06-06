"use client"

import { FaAngleDoubleRight } from "react-icons/fa"
import Become from "../become"

export default function SecondSection() {

  return (
    <div className='flex flex-col items-center px-3 mt-14'>
        <div className="flex flex-col gap-4 text-2xl font-bold text-center text-grey-be10x">
            <p>If you checked ANY of these boxes above, then you’re invited to join the </p>
            <p>The AI Tools Workshop</p>
        </div>
        <Become />
    </div>
  )
}
