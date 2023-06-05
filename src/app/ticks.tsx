import { AiOutlineCheck } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";

export default function Ticks() {
  return (
    <div className="mt-10 text-xl font-semibold text-center text-white uppercase">
        <ul className="">
            <li className="flex justify-center">
                <BsCheck size={30} className="mr-1 font-extrabold text-orange-be10x" />
                <span>No prior knowledge required</span>
            </li>
            <li className="flex justify-center">
                <BsCheck size={30} className="mr-1 font-extrabold text-orange-be10x" />            
                <span className="elementor-icon-list-text">Save upto 2 Hours Everyday</span>
            </li>
            <li className="flex justify-center">
                <BsCheck size={30} className="mr-1 font-extrabold text-orange-be10x" />
                <span className="elementor-icon-list-text">Become Hyper Efficient</span>
            </li>
        </ul>


    </div>
  )
}
