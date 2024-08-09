import { PageIntro } from '@/components/PageIntro'
import Image from 'next/image'
import process from '@/images/process.jpg'

export default async function About() {
  return (
    <>
      <PageIntro title="Our Process">
        <p>
          We are dedicated to working hand-in-hand with our clients throughout their design journey. Whether you need assistance with accentuating a corner or require comprehensive guidance from initial concept to final realization, we are committed to bringing your vision to life.
        </p>
        {/* <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Three architects - Abrar, Itminan, and Tanima - aspiring to transform environments into living experiences that tell stories of the connections fostered between the people who inhabit them.
          </p>
          <p>
            At Studio, we're more than just colleagues — we're a family. This
            means we pay very little and expect people to work late. We want our
            employees to bring their whole selves to work. In return, we just
            ask that they keep themselves there until at least 6:30pm.
          </p>
        </div> */}
        <div className='w-full grid place-items-center'>
          <Image src={process} className="w-full" />
        </div>
      </PageIntro>
    </>
  )
}