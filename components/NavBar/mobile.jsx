import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Container } from "../Container";
import social from "../../data/social";
import navigationData from "../../data/navigation.json";

function Drawer() {
  return (
    <Container
      size="full"
      className="fixed z-10 min-h-screen bg-gradient-to-b from-pink-50 via-emerald-50 to-cyan-50"
    >
      <div className="flex flex-col justify-center items-center w-full h-full pt-24">
        <div className="grid gap-6">
          {navigationData.map((data) => (
            <Link href={data.href} key={data.href}>
              <a
                className="font-bold text-2xl"
                target={data.external && "_blank"}
              >
                {" "}
                {data.label}{" "}
              </a>
            </Link>
          ))}
        </div>
        <div className="mt-24">
          {social.map(({ name, url, Icon }) => (
            <a
              key={name}
              href={url}
              className="inline-block mr-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="h-6 w-6 hover:text-pink-500" />
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
}

export function MobileNavBar({ show, onChangeVisibility }) {
  const [open, setOpen] = useState(show);

  useEffect(() => {
    onChangeVisibility(open);
  }, [open]);

  useEffect(() => {
    setOpen(show);

    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [show]);

  return (
    <>
      <Container size="2xl">
        <div className="w-full pt-5">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <a className="text-xl font-bold">🍄 Michele Riva</a>
              </Link>
            </div>
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <IoMdClose className="w-7 h-7" />
              ) : (
                <IoMdMenu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {open && <Drawer />}
    </>
  );
}
