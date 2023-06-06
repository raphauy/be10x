import Image from 'next/image'
import Hero from './(hero)/hero'
import Checkboxes from './(checkboxes)/checkboxes'
import Divider from './divider'
import Images from './(images)/images'
import Bonus from './(bonus)/bonus'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-porcelain-be10x">
      <Hero />
      
      <Checkboxes />

      <Divider />

      <Images />
      
      <Divider />

      <Bonus />

      <div className='mb-96'></div>
    </main>
  )
}
