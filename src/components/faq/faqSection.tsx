import Faq from './faq'
import Become from '../become'

export default function FaqSection() {
  const faqData = [
    {
      question: "When is the workshop?",
      answer: "The workshop is on Sunday, June 11, 2023 from 11:00 am to 1:30 pm."
    },
    {
      question: "Will this be live or pre-recorded?",
      answer: "It is a completely live workshop."
    },
    {
      question: "Is it a certified workshop?",
      answer: "Absolutely. You will be certified by Be10X Cofounders – Aditya Goenka and Aditya Kachave who have jointly built multiple 8 figure companies with the help of AI tools."
    },
    {
      question: "Will it be recorded?",
      answer: "No, it won’t be recorded."
    },
    {
      question: "What should I be prepared with before the workshop starts?",
      answer: "Make sure you come 10 mins before the scheduled time and have a simple notebook and pen to write the important points you find during the workshop."
    },
    {
      question: "I made the payment but didn't receive any email",
      answer: "Please write to us at hello@be10x.in & our awesome support team will get back to you as soon as possible."
    }
  ];

  return (
    <>
      <div className='flex flex-col items-center w-full gap-4 px-3 mt-5 text-3xl font-bold text-grey-be10x'>
        <p>FREQUENTLY ASKED QUESTIONS</p>
        {faqData.map((faq, index) => (
          <Faq key={index} question={faq.question} answer={faq.answer} />
        ))}
        <Become />
      </div>
    </>
  );
}
