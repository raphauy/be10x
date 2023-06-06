"use client";

import { useEffect, useState } from "react";
import { differenceInSeconds, parse } from "date-fns";
import { getRemainingTime } from "@/utils/dateUtils";

interface Props {
  targetDateTime: string;
}

export default function RunningOutFooter({ targetDateTime }: Props) {
  const targetDate = parse(targetDateTime, "yyyy-MM-dd HH:mm:ss", new Date());
  const [remainingTime, setRemainingTime] = useState(
    getRemainingTime(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(getRemainingTime(targetDate));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);


  return (
    <div className="flex justify-between w-full text-xl text-white sm:text-3xl">
      <div className="flex items-center ml-4">
        <p>{remainingTime.hours}</p>
        <p className="self-end ml-1 mr-3 text-lg">H</p>
        <p>{remainingTime.minutes}</p>
        <p className="self-end ml-1 mr-3 text-lg">M</p>
        <p>{remainingTime.seconds}</p>
        <p className="self-end ml-1 text-lg">S</p>
      </div>
    </div>
  );
}

