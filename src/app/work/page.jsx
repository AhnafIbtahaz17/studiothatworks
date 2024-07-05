import Image from 'next/image'
import Link from 'next/link'
import { promises as fs } from "fs";
import path from "path";

import { Clients } from "@/components/Clients";
import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-dark.svg'
import BrunchAtBailey from "@/images/BrunchAtBailey.png";
import WebAble from "@/images/WebAble.png";
import Zen from "@/images/Zen.png";
import Slider from '@/components/Slider';

const importAll = (r) => r.keys().map(r);
const p1 = importAll(require.context('../../images/PROJECTS/p1'));
const p2 = importAll(require.context('../../images/PROJECTS/p2'));
const p3 = importAll(require.context('../../images/PROJECTS/p3'));

const caseStudies = [
  {
    client: "Zen",
    service: "Architecture, Interior",
    logo: Zen,
    date: "July 2023",
    images: p1,
  },
  {
    client: "Brunch at Bailey",
    service: "Interior",
    logo: BrunchAtBailey,
    date: "August 2023",
    images: p2,
  },
  {
    client: "WebAble",
    service: "Interior",
    logo: WebAble,
    date: "December 2023",
    images: p3,
  },
];

function CaseStudies({ caseStudies }) {
  console.log(p1)
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-5 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:gap-x-8 lg:col-span-1">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.logo}
                      alt=""
                      className="h-16 w-16 flex-none"
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      {caseStudy.date}
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-4">
                  <Slider slides={caseStudy.images} />
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}

const clients = [
  ['Phobia', logoPhobia],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

export const metadata = {
  title: 'Our Work',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {
  // let caseStudies = await loadCaseStudies()

  return (
    <>
      <PageIntro eyebrow="Our work" title="Our work"></PageIntro>
      <div className="mt-12 rounded-[2.5rem] bg-neutral-950 py-20 sm:py-32">
        <Clients />
      </div>

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Mail Smirk", logo: logoMailSmirk }}
      >
        We approached <em>Studio</em> because we loved their past work. They
        delivered something remarkably similar in record time.
      </Testimonial>

      <ContactSection />
    </>
  );
}
