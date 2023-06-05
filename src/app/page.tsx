import Image from 'next/image'
import Hero from './hero'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Hero />
    </main>
  )
}
