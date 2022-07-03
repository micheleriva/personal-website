import Image from "next/image";
import { useState } from "react";
import { Container } from "../components/Container";
import { bio } from "../data/bio.json";

export default function Home() {
  const [ratio, setRatio] = useState(16 / 9);
  return (
    <div>
      <Container size="2xl">
        <div className="relative grid grid-cols-2">
          <div className="relative w-full h-[500px]">
            <Image
              src="/imgs/micheleriva_codestantine.jpg"
              alt="Michele Riva at CODEStantine 2022, Nis, Serbia"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="mt-28 h-full">
            <div className="-translate-x-10 bg-emerald-100 p-10">
              <h1 className="font-black text-5xl">
                Senior Architect at{" "}
                <a
                  href="https://nearform.com"
                  className="underline hover:text-pink-500"
                  target="_blank"
                >
                  NearForm
                </a>{" "}
                <br />
                Book Author <br />
                International Speaker
              </h1>
              <h2 className="text-3xl mt-2">
                {" "}
                Google Developer Expert, Microsoft MVP{" "}
              </h2>
            </div>
          </div>
        </div>
      </Container>

      <Container size="xl">
        <div className="grid gap-10 grid-cols-2 mt-20">
          <div>{bio}</div>
          <div className="relative">
            <Image
              src="/imgs/micheleriva_bejs.jpg"
              alt="Michele Riva at BeJS 2022, Brussels, Belgium"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </Container>

      <Container
        size="full"
        className="mt-10 py-10 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100"
      >
        <Container size="xl">
          <div className="grid gap-10 grid-cols-2">
            <div className="relative">
              <Image
                src="/imgs/micheleriva_real_world_nextjs.png"
                alt="Real-World Next.js, written by Michele Riva"
                layout="responsive"
                width={200}
                height={200 / ratio}
                onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                  setRatio(naturalWidth / naturalHeight)
                }
              />
            </div>
            <div>
              <h1 className="font-black text-5xl"> Real-World Next.js </h1>
              <p className="mt-5">
                Next.js is a scalable and high-performance React.js framework
                for modern web development and provides a large set of features,
                such as hybrid rendering, route prefetching, automatic image
                optimization, and internationalization, out of the box. If you
                are looking to create a blog, an e-commerce website, or a simple
                website, this book will show you how to use the multipurpose
                Next.js framework to create an impressive user experience.{" "}
                <br />
                <br />
                Starting with the basics of Next.js, the book demonstrates how
                the framework can help you reach your development goals. You'll
                realize how versatile Next.js is as you build real-world
                applications with step-by-step explanations. This Next.js book
                will guide you in choosing the right rendering methodology for
                your website, securing it, and deploying it to different
                providers, all while focusing on performance and developer
                happiness. <br />
                <br />
                By the end of the book, you'll be able to design, build, and
                deploy modern architectures using Next.js with any headless CMS
                or data source.
                <br />
                <br />
              </p>

              <div>
                <a
                  className="px-4 py-2 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 hover:from-indigo-500 hover:via-purple-300 hover:to-pink-300 hover:text-white transition ease-in rounded-md"
                  href="https://rwnjs.com/order/amazon"
                  target="_blank"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
}
