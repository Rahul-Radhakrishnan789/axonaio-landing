import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <section className="p-10 border-t">
      <div className="container mx-auto">
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <a href="/" className="text-2xl font-bold text-gray-900">
                  <div className="flex items-center gap-2 text-[#181411]">
                    <div className="size-4">
                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-[#181411] text-lg font-bold leading-tight tracking-[-0.015em]">
                      GameSoft
                    </h2>
                  </div>
                </a>
                <p className="mt-6 text-sm text-muted-foreground">
                  A collection of 100+ responsive HTML templates for your
                  startup business or side project.
                </p>
              </div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="hover:text-primary">
                  <a href="#">
                    <Instagram className="size-6" />
                  </a>
                </li>
                <li className="hover:text-primary">
                  <a href="#">
                    <Facebook className="size-6" />
                  </a>
                </li>
                <li className="hover:text-primary">
                  <a href="#">
                    <Twitter className="size-6" />
                  </a>
                </li>
                <li className="hover:text-primary">
                  <a href="#">
                    <Linkedin className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-4 border-t p-2 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© 2024 GameSoft. All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <a href="#">Terms and Conditions</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
