import Certificate from '@/components/certificate/certificate'
import FaqSection from '@/components/faq/faqSection'
import Footer from '@/components/footer'
import Mentors from '@/components/mentors/mentors'
import StillNotConvinced from '@/components/still/stillNotConvinced'
import { readDateFromFile } from '@/utils/fileDate'
import Bonus from '../components/bonus/bonus'
import Checkboxes from '../components/checkboxes/checkboxes'
import Divider from '../components/divider'
import Hero from '../components/hero/hero'
import Images from '../components/images/images'

export default function Home() {


let date = readDateFromFile()
if (!date)
  date= "2023-06-07 12:00:00"



  return (
    <main className="w-full bg-porcelain-be10x">

      <div className="flex flex-col items-center justify-between min-h-screen">
        <Hero />
        
        <Checkboxes />

        <Divider />

        <Images />
        
        <Divider />
        
        <Bonus date={date} />

        <Divider />

        <Certificate />

        <Mentors />

        <Divider />

        <StillNotConvinced />

        <Divider />

        <FaqSection />

        <Divider />

        <div className='mb-20'/>

      </div>

      <Footer date={date} />

    </main>
  )
}
