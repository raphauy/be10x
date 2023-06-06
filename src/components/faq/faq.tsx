"use client"

import { FaCaretRight, FaCaretUp } from "react-icons/fa";
import { useState } from "react";
import { Collapse } from "react-collapse"

interface Props{
    question: string
    answer: string
}
export default function Faq({ question, answer }: Props) {
    const [expand, setExpand] = useState(false)
    const expandClass= expand ? "display" : "hidden"
    const ansClass = `${expandClass} overflow-hidden transition-max-h duration-300 ml-6 font-normal py-2`;

    return (
        <div className='flex flex-col items-center w-full'>

            <div className="w-full border border-b border-gray-100 rounded cursor-pointer border-b-gray-300">
                <div className="relative p-1 text-sm text-gray-600" onClick={() => setExpand(!expand)}>
                    <button 
                        aria-label="question-expander"
                        className="absolute top-0 left-0 p-1 text-xl focus:outline-none"
                    >
                        {expand && <FaCaretUp className="w-5" />}
                        {!expand && <FaCaretRight className="w-5"/>}                        
                    </button>
                    <div className="w-5/6 mb-2 ml-6">
                        {question}
                    </div>
                    <Collapse isOpened={expand} >
                        <div className={ansClass}>
                            {answer}
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
      )
    }
    