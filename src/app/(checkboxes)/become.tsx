import { FaAngleDoubleRight } from "react-icons/fa";

export default function Become() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full p-5 mt-6 font-bold text-white rounded-md cursor-pointer sm:text-2xl md:w-2/3 lg:w-1/2 bg-orange-be10x">
        <div className="flex items-center justify-center">
          <FaAngleDoubleRight size={27} />
          <span>Become an AI Tools Expert Now!</span>
        </div>
        <p className="text-sm text-center">(Only Rs. 299)</p>
      </div>
      <div className="mt-5 text-lg font-bold text-center text-grey-be10x">
        <p>REGISTER BEFORE MIDNIGHT OF June 06, 2023</p>
        <p>to Unlock All Bonuses Worth Rs. 10,500</p>
      </div>
    </div>
  );
}
