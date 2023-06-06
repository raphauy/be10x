"use client";

import { useEffect, useState } from "react";
import { differenceInSeconds, parse } from "date-fns";
import { getRemainingTime } from "../../utils/dateUtils";

interface Props {
  targetDateTime: string;
}

export default function RunningOut({ targetDateTime }: Props) {
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
    <div className="flex flex-col items-center pt-10">
      <p className="text-3xl font-bold">
        Time is running out. Reserve your seat now!
      </p>
      <div className="grid grid-cols-3 gap-2 mt-4 text-6xl text-white">
        <div className="w-full text-center py-9 px-14 bg-grey-be10x">
          <p>{remainingTime.hours}</p>
          <p className="text-lg">Hours</p>
        </div>
        <div className="w-full text-center py-9 px-14 bg-grey-be10x">
          <p>{remainingTime.minutes}</p>
          <p className="text-lg">Minutes</p>
        </div>
        <div className="w-full text-center py-9 px-14 bg-grey-be10x">
          <p>{remainingTime.seconds}</p>
          <p className="text-lg">Seconds</p>
        </div>
      </div>
    </div>
  );
}

