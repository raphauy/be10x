"use client"

export default function Form() {
  const handleClick = (id: string) => {
    const checkbox = document.getElementById(id) as HTMLInputElement;

    if (checkbox) {
      checkbox.checked = !checkbox.checked;
    }
  };

  return (
    <>
        <div className="text-3xl font-bold text-center uppercase text-grey-be10x">
            Please Check All The Boxes Where Your Answer Is YES
        </div>
        <form>
            <div className="grid w-full grid-cols-1 gap-3 mt-10 text-gray-500 sm:grid-cols-2">
                <div className="flex items-start p-2 m-3 bg-white rounded-md shadow-lg cursor-pointer">                    
                    <input id="1" type="checkbox" className="mr-2 w-9 h-9"/>
                    <p onClick={() => handleClick("1")}>I am constantly in the fear of losing my job because of the current job market</p>                    
                </div>

                <div className="flex items-start p-2 m-3 bg-white rounded-md shadow-lg cursor-pointer">                    
                    <input id="2" type="checkbox" className="mr-2 w-9 h-9"/>
                    <p onClick={() => handleClick("2")}>I want to leverage AI tools to make much more money than what I am earning now</p>                    
                </div>

                <div className="flex items-start p-2 m-3 bg-white rounded-md shadow-lg cursor-pointer">                    
                    <input id="3" type="checkbox" className="mr-2 w-9 h-9"/>
                    <p onClick={() => handleClick("3")}>I use tools like ChatGPT once in a while but haven`t started using it professionally like a pro</p>                    
                </div>

                <div className="flex items-start p-2 m-3 bg-white rounded-md shadow-lg cursor-pointer">                    
                    <input id="4" type="checkbox" className="mr-2 w-9 h-9"/>
                    <p onClick={() => handleClick("4")}>I am fascinated by developments in AI tools but don`t know I can leverage them</p>
                </div>

                <div className="flex items-start p-2 m-3 bg-white rounded-md shadow-lg cursor-pointer">                    
                    <input id="5" type="checkbox" className="mr-2 w-9 h-9"/>
                    <p onClick={() => handleClick("5")}>I am always short on time and dont ever have time for myself</p>
                </div>

                <div className="flex items-start p-2 m-3 bg-white rounded-md shadow-lg cursor-pointer">                    
                    <input id="6" type="checkbox" className="mr-2 w-w-9 h-9"/>
                    <p onClick={() => handleClick("6")}>I want to get accelerated promotions and become a CXO in upcoming 5 years</p>
                </div>

            </div>
        </form>

    </>

  )
}
