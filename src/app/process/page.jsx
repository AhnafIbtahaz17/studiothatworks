import { PageIntro } from '@/components/PageIntro'
import Image from 'next/image'
import process from '@/images/process.jpg'

export default async function About() {
  return (
    <>
      <PageIntro title="Our Process">
        {/* <p>
          Three architects - Abrar, Itminan, and Tanima - aspiring to transform environments into living experiences that tell stories of the connections fostered between the people who inhabit them.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
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
        <Image src={process} className="w-full" />
      </PageIntro>
    </>
  )
}