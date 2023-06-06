import Hero from '../components/hero/hero'
import Checkboxes from '../components/checkboxes/checkboxes'
import Divider from '../components/divider'
import Images from '../components/images/images'
import Bonus from '../components/bonus/bonus'
import Certificate from '@/components/certificate/certificate'
import Mentors from '@/components/mentors/mentors'
import StillNotConvinced from '@/components/still/stillNotConvinced'
import Faq from '@/components/faq/faq'
import FaqSection from '@/components/faq/faqSection'
import Footer from '@/components/footer'

export default function Home() {

  const date= "2023-06-06 12:00:00"

  return (
    <main className="bg-porcelain-be10x">

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
