import Image from "next/image";
import { FaAngleDoubleRight, FaArrowCircleRight, FaRegCalendarCheck, FaRegClock, FaRegHourglass, FaVideo } from "react-icons/fa";

export default function Calendar() {
  return (
    <div className="w-full px-3">
        <div className="grid w-full grid-cols-1 gap-3 mt-10 text-white sm:grid-cols-2">
            <div className="order-3 sm:order-1">{calSection()}</div>
            <div className="order-1 sm:order-2">
                <Image width={1280} height={720} 
                    src="/Red-Abstract-YouTube-Thumbnail.jpg" 
                    alt="Red-Abstract-YouTube-Thumbnail.jpg"
                    className="rounded-lg"
                />
            </div>
            <div className="order-2 w-full col-span-2 sm:w-auto sm:order-3 justify-self-center">
                <div className="p-5 m-2 text-2xl font-bold text-center text-black rounded-md cursor-pointer bg-yellow-be10x">
                    <div className="flex items-center">
                        <FaAngleDoubleRight size={27} />
                        <span>Become an AI Tools Expert Now!</span>
                    </div>
                    <p className="text-sm">(Only Rs. 299)</p>
                </div>
            </div>
        </div>
        <div className="mt-5 text-lg font-bold text-center text-white uppercase">Bonuses Worth <span className="text-yellow-be10x">Rs. 10,500</span> if you Register before Midnight.</div>
        <div className="mb-4 text-2xl font-semibold text-center text-yellow-be10x mt-9">Be Quick! Last few seats are remaining for this batch!</div>

    </div>
  )
}


function calSection() {
    return (
        <div>
            <div className="grid w-full grid-cols-2 gap-2 p-3 bg-gray-800 rounded-md">
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
        <div className="flex flex-col gap-1 p-1">
            <p className='flex gap-2 text-lg text-white'>
                <FaArrowCircleRight size={22} className="mt-[2px]" />
                <span>Get <span className="text-orange-be10x">certified by be10x</span> to highlight your AI tool capabilities in your resume</span>
            </p>
            <p className='flex gap-2 text-lg text-white'>
                <FaArrowCircleRight size={22} className="mt-[2px]" />
                <span>Learn from <span className="text-orange-be10x">IIT Kharagpur</span> alumni</span>
            </p>
            <p className='flex gap-2 text-lg text-white'>
                <FaArrowCircleRight size={22} className="mt-[2px]" />
                <span>Be among the top 1% professionals to <span className="text-orange-be10x">avoid being laid off</span></span>
            </p>
            <p className='flex gap-2 text-lg text-white'>
                <FaArrowCircleRight size={22} className="mt-[2px]" />
                <span><span className="text-orange-be10x">No technical AI knowledge</span> required to master AI tools</span>
            </p>
            <p className='flex gap-2 text-lg text-white'>
                <FaArrowCircleRight size={22} className="mt-[2px]" />
                <span>Proven to <span className="text-orange-be10x">reduce your work</span> by 2 hours daily</span>
            </p>
        </div>
    )
}