import { differenceInSeconds } from "date-fns";

export function getRemainingTime(targetDate: Date) {
    const now = new Date();
    const difference = differenceInSeconds(targetDate, now);

    if (difference < 0) {
      return { hours: "00", minutes: "00", seconds: "00" };
    }

    const hours = String(Math.floor(difference / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((difference % 3600) / 60)).padStart(2,"0");
    const seconds = String(difference % 60).padStart(2, "0");

    return { hours, minutes, seconds };
  }
