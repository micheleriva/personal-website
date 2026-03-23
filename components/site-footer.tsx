import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6"

export function SiteFooter() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/MicheleRiva",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/micheleriva95/",
      icon: FaLinkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/MicheleRivaCode",
      icon: FaXTwitter,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/micheleriva.js",
      icon: FaInstagram,
    },
  ]

  return (
    <footer className="mt-12 border-t border-border sm:mt-16">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-col gap-3 font-sans text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Michele Riva. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                  aria-label={link.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
