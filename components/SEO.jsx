import { DefaultSeo } from "next-seo";

export function SEO() {
  return (
    <DefaultSeo
      title="Michele Riva - MVP, GDE"
      description="Michele Riva is a senior architect, published author, international speaker, Google Developer Expert and Microsoft Most Valuable Professional"
      openGraph={{
        type: "website",
        locale: "en_US",
        url: "https://www.micheleriva.it",
        site_name: "Michele Riva",
        images: [
          {
            url: "https://www.micheleriva.it/imgs/micheleriva_og_image.png",
            alt: "Michele Riva - Senior Architect, Published Author, International Speaker",
            height: 1920,
            width: 1080,
            type: "image/png",
          },
        ],
      }}
      twitter={{
        handle: "@MicheleRivaCode",
        site: "@MicheleRivaCode",
        cardType: "summary_large_image",
      }}
    />
  );
}
