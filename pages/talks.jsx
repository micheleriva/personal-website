import Image from "next/image";
import { useEffect, useState } from "react";
import clx from "classnames";
import { format } from "date-fns";
import { Listbox } from "@headlessui/react";
import { Container } from "../components/Container";
import { groupByPolyfill } from "../utils";
import events from "../data/events";

groupByPolyfill();

const eventTypes = ["all", ...new Set(events.map(({ type }) => type))];
const eventLanguages = [
  "all",
  ...new Set(events.map(({ language }) => language)),
];
const eventModes = ["all", ...new Set(events.map(({ mode }) => mode))];
const eventCountries = [
  "all",
  ...new Set(events.map(({ country }) => country)),
];

function Nations() {
  const nations = [...new Set(events.map(({ emoji }) => emoji))];

  return (
    <div className="grid grid-cols-12 md:flex md:my-2">
      {nations.map((emoji) => (
        <div key={emoji} className="mr-2">
          {emoji}
        </div>
      ))}
    </div>
  );
}

function Select({ values, title, onSelect }) {
  const [selected, setSelected] = useState(values[0]);

  useEffect(() => {
    onSelect(selected);
  }, [selected]);

  return (
    <div className="relative">
      <div className="mb-4"> {title} </div>
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="bg-white px-2 py-2 rounded-xl w-full capitalize">
          {selected}
        </Listbox.Button>
        <Listbox.Options className="absolute w-full bg-white mt-5 rounded-xl max-h-48 overflow-auto shadow-lg">
          {values.map((value) => (
            <Listbox.Option
              className="capitalize cursor-pointer py-2 hover:bg-orange-50"
              key={value}
              value={value}
            >
              {value}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

export default function Talks() {
  const [eventType, setEventType] = useState("all");
  const [eventLanguage, setEventLanguage] = useState("all");
  const [eventMode, setEventMode] = useState("all");
  const [eventCountry, setEventCountry] = useState("all");

  const eventsByYear = events.groupBy(({ date }) => date.getFullYear());
  const eventsByType = Object.keys(eventsByYear)
    .map((year) => {
      const filtered = eventsByYear[year]
        .filter(({ type }) => eventType === "all" || type === eventType)
        .filter(
          ({ language }) =>
            eventLanguage === "all" || language === eventLanguage
        )
        .filter(({ mode }) => eventMode === "all" || mode === eventMode)
        .filter(
          ({ country }) => eventCountry === "all" || country === eventCountry
        );

      return {
        year,
        ...filtered.groupBy(({ type }) => type),
      };
    })
    .reverse();

  return (
    <>
      <Container>
        <div className="grid md:grid-cols-2">
          <div className="flex justify-center flex-col w-full ">
            <h1 className="text-2xl md:text-5xl font-black">
              I'm always up for talking at conferences and meetups!
            </h1>
            <p className="mt-2">
              Scroll to see my past talks, workshops, and interviews
            </p>
            <Nations />
          </div>
          <div className="relative h-56 w-full md:h-[500px]">
            <Image
              src="/imgs/micheleriva_codemotion.jpg"
              alt="Michele Riva at Codemotion 2019, Milan, Italy"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </Container>

      <div className="mt-24">
        <Container size="2xl">
          <>
            <div className="text-center hidden md:block">
              <p className="text-2xl font-bold">Filter events</p>
              <div className="grid md:grid-cols-4 gap-10 my-6">
                <Select
                  values={eventTypes}
                  title="Event type"
                  onSelect={setEventType}
                />
                <Select
                  values={eventLanguages}
                  title="Spoken language"
                  onSelect={setEventLanguage}
                />
                <Select
                  values={eventModes}
                  title="Event mode"
                  onSelect={setEventMode}
                />
                <Select
                  values={eventCountries}
                  title="Event country"
                  onSelect={setEventCountry}
                />
              </div>
            </div>

            {eventsByType.map(({ year, ...types }) => (
              <div key={year} className="mt-24 bg-cyan-50 p-10 rounded-xl">
                <h2 className="text-2xl md:text-4xl font-black mb-10">
                  {year}
                  <span className="ml-4 font-normal">
                    (
                    {Object.keys(types)
                      .map((k) => types[k].length)
                      ?.reduce((x, y) => x + y, 0)}{" "}
                    events)
                  </span>
                </h2>
                {Object.keys(types)
                  .sort((type) => (type === "talk" ? -1 : 1))
                  .map((type) => (
                    <div key={type}>
                      <h3 className="text-2xl md:text-3xl capitalize font-bold my-5">
                        {type}s
                      </h3>
                      {types[type]
                        .sort((e) => e.date)
                        .reverse()
                        .map(({ event, ...e }, i) => (
                          <div
                            key={event + e.title}
                            className={clx("px-4 py-2", {
                              "bg-cyan-100 rounded-xl": i % 2 === 0,
                            })}
                          >
                            <div className="grid md:grid-cols-[200px_250px_1fr_300px] py-1 text-md">
                              <div className="w-44 text-cyan-800">
                                {format(e.date, "dd MMM yyyy")}
                              </div>
                              <div className="font-bold w-64"> {event} </div>
                              <div className="w-full">
                                {e.url ? (
                                  <a
                                    href={e.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-blue-500"
                                  >
                                    {e.title}
                                  </a>
                                ) : (
                                  e.title
                                )}
                              </div>
                              <div className="text-cyan-700 md:text-black">
                                {e.city}, {e.country} {e.emoji}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
              </div>
            ))}
          </>
        </Container>
      </div>
    </>
  );
}
