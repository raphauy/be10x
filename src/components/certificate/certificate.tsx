import Image from "next/image";
import Divider from "../divider";

export default function Certificate() {
  return (
    <div className="flex flex-col items-center w-full pt-5 mt-3 text-white bg-grey-be10x">
      <p className="mb-5 text-3xl font-bold">
        Get a certification of the workshop
      </p>
      <p className="mb-5 text-base">
        Yes! You will be certified by
        <span className="text-orange-be10x"> AI Tools Expert Trainers </span>
        which brings a lot of credibility to your certificate & resume.
      </p>
      <div className="flex justify-center m-3 sm:w-4/5 lg:w-3/5">
        <Image
          className="rounded-lg"
          src="/blue-professional-certificate-1024x724.png"
          width={1024}
          height={724}
          alt="certificate"
        />
      </div>

      <Divider />

    </div>
  );
}
