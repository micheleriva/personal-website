import Link from "next/link";
import { Container } from "../Container";
import { Phrase } from "../Phrase";
import social from "../../data/social";
import navigationData from "../../data/navigation.json";

export function DesktopNavBar() {
  return (
    <>
      <nav>
        <div className="p-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          <Phrase />
        </div>
        <Container size="2xl">
          <div className="w-full pt-10">
            <div className="flex justify-between items-center">
              <div>
                <Link href="/">
                  <a className="text-3xl font-bold">🍄 Michele Riva</a>
                </Link>
              </div>
              <div className="flex justify-between items-center text-xl">
                {navigationData.map((data) => (
                  <div key={data.label} className="px-4 hover:underline">
                    <Link href={data.href} passHref>
                      <a
                        target={data.external ? "_blank" : "_self"}
                        rel={data.external && "noreferrer"}
                      >
                        {data.label}
                      </a>
                    </Link>
                  </div>
                ))}

                <div className="ml-4">
                  {social.map(({ name, url, Icon }) => (
                    <a
                      key={name}
                      href={url}
                      className="inline-block mr-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-4 w-4 hover:text-pink-500" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}
