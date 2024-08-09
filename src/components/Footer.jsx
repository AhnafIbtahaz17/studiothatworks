import Link from 'next/link'
import Image from "next/image";

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
// import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import logo from "@/images/logo.png";

const navigation = [
  {
    title: "Work",
    links: [
      { title: "project1", href: "#" },
      { title: "project2", href: "#" },
      { title: "project3", href: "#" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/projects",
      },
    ],
  },
  {
    title: "Studio",
    links: [
      { title: "Who's that", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Publication", href: "/publication" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: socialMediaProfiles,
  },
];

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function FooterLogo() {
  return (
    <div className="max-w-lg">
      <Image src={logo} className="h-12 w-auto pb-4" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam animi molestias dolorem odit cupiditate nam deserunt, nisi nemo natus, consequatur voluptate. Voluptatem labore repellendus recusandae, soluta consectetur facere nihil error dolorem,</p>
    </div>
  );
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-1">
          <Navigation />
          {/* <div className="flex">
            <FooterLogo />
          </div> */}
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          {/* <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link> */}
          <Link href="/" aria-label="Home">
            <Image src={logo} className="h-12 w-auto pb-4" />
          </Link>
          <p className="text-sm text-neutral-700">
            © Studio That Works Inc. 2023
          </p>
        </div>
      </FadeIn>
    </Container>
  );
}
