import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "../components/Container";
import events from "../data/events";

export default function Home() {
  const [ratio, setRatio] = useState(16 / 9);
  return (
    <div>
      <Container size="2xl">
        <div className="relative grid md:grid-cols-2">
          <div className="relative w-full h-56 md:h-[500px]">
            <Image
              src="/imgs/micheleriva_codestantine.jpg"
              alt="Michele Riva at CODEStantine 2022, Nis, Serbia"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="md:-translate-x-8 md:mt-28 h-full w-11/12 md:w-full m-auto md:m-0">
            <div className="-translate-y-10 md:-translate-x-0 bg-emerald-100 p-5 md:p-10">
              <h1 className="font-black text-2xl md:text-5xl">
                Co-Founder @{" "}
                <a
                  href="https://oramasearch.com"
                  className="underline hover:text-pink-500"
                  target="_blank"
                >
                  OramaSearch
                </a>
                <br />
                Published Author <br />
                International Speaker
              </h1>
              <h2 className="text-xl md:text-3xl mt-2">
                Google Developer Expert, Microsoft MVP
              </h2>
            </div>
          </div>
        </div>
      </Container>

      <Container size="xl">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 mt-0 md:mt-24">
          <p>
            I'm a passionate and experienced software engineer, <b>Google GDE</b>, and&nbsp;
            <b>Microsoft MVP</b> from Milan, Italy. <br /><br />I've worked as a software engineer
            and architect for almost ten years in product and consultancy
            companies, taking the best from both worlds. <br />
            <br />
            In 2022, I've published my first book, "Real-World Next.js," where I
            talk about the web framework that changed forever the way we build
            web applications.
            <br />
            <br />
            In 2023, I've co-founded <a className='text-pink-500 underline' href="https://oramasearch.com">OramaSearch</a>, where I am working as a <b>CTO</b> building the new generation of search engines.
          </p>
          <div className="relative w-full h-48 md:h-full">
            <Image
              src="/imgs/micheleriva-leaddev.JPG"
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
        className="mt-24 py-24 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100"
      >
        <Container size="xl">
          <div className="grid gap-10 md:grid-cols-2">
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

      <Container className="mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col justify-center">
            <h1 className="font-black text-5xl">Events</h1>
            <p className="mt-2">
              Since 2019, I talked to more than {events.length} conferences,
              meetups, and podcasts.
            </p>
            <br />
            <p>
              Want to learn more about my events? Check out the{" "}
              <Link href="/talks" passHref>
                <a className="text-pink-500 underline">events page</a>
              </Link>
              .
            </p>
            <p>
              Want me to talk at your conference?{" "}
              <Link href="/contacts">
                <a className="text-pink-500 underline">Let's get in touch</a>
              </Link>
              !
            </p>
          </div>

          <div className="grid gap-5">
            <iframe
              className="w-[100%] md:h-[315px]"
              src="https://www.youtube.com/embed/42sMkbGLlh4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-[100%] md:h-[315px]"
              src="https://www.youtube.com/embed/MGpwKsdZmG0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
}
