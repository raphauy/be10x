import Become from "../become";
import DocTypeComponent from "./docTypeComponent";
import RunningOut from "./runningOut";
import Texts from "./texts";

interface Props{
  date: string
}

export default function Bonus({ date }: Props) {
  return (
    <div className='flex flex-col items-center'>

      <Texts />

      <div className="grid grid-cols-1 gap-3 px-3 pt-10 sm:grid-cols-2 md:grid-cols-3">
        <DocTypeComponent pdf worth={5000} title="Bonus 1" text="50+ easy to implement productivity hacks" />
        <DocTypeComponent doc worth={3000} title="Bonus 2" text="800+ Premium Customizable PPT templates"/>
        <DocTypeComponent pdf worth={2500} title="Bonus 3" text="Ebook on Time Management"/>
      </div>
      
      <RunningOut  targetDateTime={date} />

      <Become />
    </div>
  )
}
