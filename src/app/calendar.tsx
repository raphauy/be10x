import { FaArrowCircleRight, FaRegCalendarCheck, FaRegClock, FaRegHourglass, FaVideo } from "react-icons/fa";

export default function Calendar() {
  return (
    <div className="w-full">
        <div className="grid w-full grid-cols-1 mt-10 text-white sm:grid-cols-2 ">
            <div className="order-3 w-full sm:order-1 justify-self-center">{calSection()}</div>
            <div className="order-1 sm:order-2 justify-self-center">Image</div>
            <div className="order-2 col-span-2 sm:order-3 justify-self-center">Become...</div>
        </div>
        <div className="text-2xl font-semibold text-center text-yellow-be10x mt-7">Be Quick! Last few seats are remaining for this batch!</div>

    </div>
  )
}


function calSection() {
    return (
        <div>
            <div className="grid w-full grid-cols-2 gap-2 p-3 m-3 bg-gray-800 rounded-md">
                <div className="flex items-center gap-2 p-2 bg-black rounded-md">
                    <FaRegCalendarCheck className="text-orange-be10x" size={28} />
                    <p>On 11th June</p>
                </div>
                <div className="flex items-center gap-2 p-2 bg-black rounded-md">
                    <FaRegHourglass className="text-orange-be10x" size={28} />
                    <p>2 Hours+</p>
                </div>
                <div className="flex items-center gap-2 p-2 bg-black rounded-md">
                    <FaVideo className="text-orange-be10x" size={28} />
                    <p>Live Session</p>
                </div>
                <div className="flex items-center gap-2 p-2 bg-black rounded-md">
                    <FaRegClock className="text-orange-be10x" size={28} />
                    <p>11 am Onwards</p>
                </div>            
            </div>
            {arrowsSection()}
        </div>
    )
}

function arrowsSection() {
    return (
        <div>
            <p className='flex gap-2 pl-2 text-lg text-white'>
                <FaArrowCircleRight size={24} className="mt-[2px]" />
                <span>Get <span className="text-orange-be10x">certified by be10x</span> to highlight your AI tool capabilities in your resume</span>
            </p>
        </div>
    )
}