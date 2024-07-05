import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { Clients } from '@/components/Clients'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import imageLaptop from '@/images/laptop.jpg'
import logo from '@/images/logo.png'
import preview1 from '@/images/preview/preview1.jpg'
import preview2 from '@/images/preview/preview2.jpg'
import preview3 from '@/images/preview/preview3.jpg'
import studiothatworks from "@/images/studiothatworks.png";


function CaseStudies() {
  return (
    <>
      <SectionIntro
        title="Transforming spaces into living experiences"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className='font-futura'>
          With the spirit of craftmanship that embodies contemporary technology,
          and promotes sustainability, our studio focuses on shaping spaces that
          adapt to the needs and aspirations of the people who inhabit them.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn className="">
            <Image src={preview1} className="object-cover w-full h-full" />
          </FadeIn>
          <FadeIn className="">
            <Image src={preview2} className="object-cover w-full h-full" />
          </FadeIn>
          <FadeIn className="">
            <Image src={preview3} className="object-cover w-full h-full" />
          </FadeIn>
        </FadeInStagger>
      </Container>
    </>
  );
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'metadata goes where.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <div className="flex w-full">
            {/* <div className="text-4xl sm:text-7xl flex flex-col justify-between pr-5">
              <p>studio</p>
              <p>THAT</p>
              <p>works</p>
            </div> */}
            {/* <Image src={logo} /> */}
            <Image src={studiothatworks} className="h-28 sm:h-40 md:h-64 lg:h-72 w-auto" />
            <Image src={logo} className="h-28 sm:h-40 md:h-64 lg:h-72 w-auto" />
            {/* <img
              src="/logo.png"
              className="max-h-32 sm:max-h-64 md:max-h-none"
              alt=""
            /> */}
          </div>
          <p className="mt-16 text-4xl text-neutral-600 font-futura">
            Fusing youthful innovation with bold architecture
          </p>
        </FadeIn>
      </Container>

      <div className="mt-24 mx- rounded-[2.5rem] bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
        <Clients />
      </div>

      <CaseStudies />

      <ContactSection />
    </>
  );
}
