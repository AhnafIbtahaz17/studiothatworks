import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import Image from "next/image";
import blue1 from "@/images/halfcircles/blue1.png";
import blue2 from "@/images/halfcircles/blue2.png";
import green1 from "@/images/halfcircles/green1.png";
import green2 from "@/images/halfcircles/green2.png";
import orange1 from "@/images/halfcircles/orange1.png";
import orange2 from "@/images/halfcircles/orange2.png";
import Link from "next/link";

const items = [
  ["Architecture", blue1],
  ["Interior", orange1],
  ["Landscape", green1],
  ["Product", green2],
  ["Visualization", blue2],
  ["Graphics", orange2],
];

export function Clients() {
  return (
    <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Studio that works with
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-24 gap-y-10 lg:grid-cols-3"
          >
            {items.map(([text, color]) => (
              <li key={text}>
                <FadeIn>
                  <div className="flex gap-2 text-white">
                    <Image src={color} alt={text} className="h-6 w-auto" />
                    <Link href="/projects">{text}</Link>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
  );
}
