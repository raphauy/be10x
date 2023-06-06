import Become from "../become";

export default function StillNotConvinced() {
  return (
    <div className='flex flex-col items-center w-full max-w-5xl gap-4 mt-5 text-3xl font-bold text-grey-be10x'>
        <p>IIIISSHHH, STILL NOT CONVINCED???</p>

        <div className="text-sm font-normal text-center text-gray-600">
            <p className="my-4"><span className="font-bold">P.S.</span> Since you’ve read this far, it’s clear you’re interested in supercharging and growing your career.</p>
            <p className="my-4">There’s only one thing left for you to do: Click the button below and join me in the Live Workshop…</p>
            <p className="mt-4 mb-0"><span className="font-bold">P.S.S.</span> CURRENTLY THE WORKSHOP IS FOR JUST RS 299</p>
            <p>(less than a medium-sized pizza)</p>
            <p>BUT THE PRICES CAN INCREASE ANYTIME!</p>
            <p className="mt-4">So click here to reserve your seat now!!!</p>
            <p>And I’ll see you Live…</p>
        </div>

        <Become />

    </div>
  )
}
