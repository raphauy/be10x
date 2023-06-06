import { readDateFromFile, writeDateToFile } from "@/utils/fileDate";
import { revalidatePath } from "next/cache";
import React from "react";

export default function AdminPage() {
  const dateStr = readDateFromFile()
  if (dateStr === null) return <div>No date found</div>

  async function handleForm(formData: FormData) {
    "use server"
    
    const dateString = formData.get("date")?.toString();

    const date= dateString?.replace("T", " ")+":00"
    
    date && writeDateToFile(date);

    revalidatePath("/")   
        
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-10">
      <div className="flex items-center text-xl">
        <p>Actual date:</p>
        <p className="pl-4 font-bold">{dateStr}</p>
      </div>
      <div className="mt-5">
        <form className='flex' action={handleForm}>
          <input type="datetime-local" name="date" className="p-2 border border-gray-300 rounded-md "/>
          <button type="submit" className="flex items-center justify-center w-32 px-3 py-2 mx-2 text-sm font-extrabold text-white bg-gray-500 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-80 focus-visible:outline-gray-600">Save</button>
        </form>
      </div>
    </main>
  )
}
