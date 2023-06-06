import Image from "next/image";
import Become from "../become";
import { BsCheck } from "react-icons/bs";

export default function Mentors() {
    return (
        <div className='flex flex-col w-full gap-4 px-3 mt-5 text-3xl font-bold text-grey-be10x'>
        
            <p className="text-center ">
                Know your mentors
            </p>

            <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
                <div>
                    <Image
                    src="/1-1-1024x1024.png"
                    width={1024}
                    height={724}
                    alt="certificate"
                    />
                </div>
                <div className="flex flex-col text-sm text-gray-600">
                    <p className="text-2xl text-grey-be10x">ADITYA GOENKA</p>
                    <div className="flex items-center mt-2">
                        <BsCheck size={30} className="mr-1 font-extrabold" />
                        <p className="">IIT Kharagpur Alumni</p>
                    </div>
                    <div className="flex items-center mb-2 -mt-2 text-sm text-gray-600">
                        <BsCheck size={30} className="mr-1 font-extrabold" />
                        <p className="">AI Tools Power User</p>
                    </div>
                    <div className="font-normal">
                        <p className="my-3">Hi, I am <span className="font-bold">Aditya Goenka</span> and I will be your mentor for the upcoming AI tools workshop.</p>
                        <p className="my-3">I am an alumni of IIT Kharagpur 2019 batch. During my undergrad years, I had done internships at Stanford university, UIUC, etc.</p>
                        <p className="my-3">I have built 2 eight figure companies with the help of AI tools and a super efficient team of just 5 people. </p>
                        <p className="my-3">I am excited to share my knowledge and experience with you, and to help you increase your productivity using AI tools.</p>
                        <p className="my-3">Join me in this workshop and let’s take the first step towards your success together.</p>
                    </div>
                </div>
            </div>
            
            <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
                <div>
                    <Image
                    src="/2-1-1024x1024.png"
                    width={1024}
                    height={724}
                    alt="certificate"
                    />
                </div>
                <div className="flex flex-col text-sm text-gray-600">
                    <p className="text-2xl text-grey-be10x">ADITYA KACHAVE</p>
                    <div className="flex items-center mt-2">
                        <BsCheck size={30} className="mr-1 font-extrabold" />
                        <p className="">IIT Kharagpur Alumni</p>
                    </div>
                    <div className="flex items-center mb-2 -mt-2 text-sm text-gray-600">
                        <BsCheck size={30} className="mr-1 font-extrabold" />
                        <p className="">AI Tools Power User</p>
                    </div>
                    <div className="font-normal">
                        <p className="my-3">Hi, I am <span className="font-bold">Aditya Kachave</span> and I will be your mentor for the upcoming AI tools workshop.</p>
                        <p className="my-3">I graduated from IIT Kharagpur and have been in the educational industry for several years now. As a fresher, I was fortunate enough to secure the highest package (INR 1.2 cr) in India.</p>
                        <p className="my-3">I too have built 2 eight figure companies with the help of AI tools and a super efficient team of just 5 people. </p>
                        <p className="my-3">I am excited to share my knowledge and experience with you, and to help you increase your productivity using AI tools.</p>
                        <p className="my-3">Join me in this workshop and let’s take the first step towards your success together.</p>
                    </div>
                </div>
            </div>   
            
        </div>
      )
    }
    