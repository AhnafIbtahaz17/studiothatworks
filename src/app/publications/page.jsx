import { PageIntro } from '@/components/PageIntro'
import Image from 'next/image'
import Publication1 from '@/images/Publication/Publication1.png'
import Publication2 from '@/images/Publication/Publication2.jpg'

export default async function Publications() {
  return (
    <>
      <PageIntro title="Our Publications">
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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6'>
          <a href="https://www.showcase.com.bd/heaven-on-a-plate/a-culinary-serenity-zen-dhanmmondi/">
            <Image src={Publication1} className="w-full rounded-lg overflow-hidden" />
          </a>
          <a className='rounded-lg overflow-hidden' href="https://www.showcase.com.bd/heaven-on-a-plate/the-floral-canopy-of-delight/">
            <Image src={Publication2} className="w-full rounded-lg overflow-hidden" />
          </a>
        </div>
      </PageIntro>
    </>
  )
}