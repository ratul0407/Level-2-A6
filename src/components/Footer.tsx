import Logo from "@/components/shared/Logo";
import React, { useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
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

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  {
    icon: <FaLinkedin className="size-5" />,
    href: "https://www.linkedin.com/in/ratul0407",
    label: "LinkedIn",
  },
];

const Footer = ({
  sections = defaultSections,
  description = "A collection of components for your startup business or side project.",
  socialLinks = defaultSocialLinks,
}: Footer7Props) => {
  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const text = textRef.current;
    if (!wrapper || !text) return;

    const fit = () => {
      let fontSize = parseInt(window.getComputedStyle(text).fontSize);

      // Increase until it overflows
      while (text.scrollWidth < wrapper.clientWidth) {
        fontSize++;
        text.style.fontSize = fontSize + "px";

        if (fontSize > 200) break;
      }

      // Decrease until it fits
      while (text.scrollWidth > wrapper.clientWidth) {
        fontSize--;
        text.style.fontSize = fontSize + "px";

        if (fontSize < 5) break;
      }
    };
    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(wrapper);

    fit();

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <section className="py-16  sm:py-10 bg-black text-white">
      <div
        className="relative h-[700px] lg:h-[600px]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative h-[calc(100vh+700px)] lg:h-[calc(100vh+600px)] -top-[100vh]">
          <div className="sticky h-700px top-[calc(100vh-700px)] lg:top-[calc(100vh-600px)] lg:h-[600px]">
            <div className="container mx-auto md:px-10">
              <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
                <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
                  {/* Logo */}
                  <div className="flex items-center gap-2 lg:justify-start">
                    <Logo />
                    <h2 className="text-xl font-semibold">EParcel</h2>
                  </div>
                  <p className="text-muted-foreground max-w-[70%] text-sm">
                    {description}
                  </p>
                  <ul className="text-muted-foreground flex items-center space-x-6">
                    {socialLinks.map((social, idx) => (
                      <li
                        key={idx}
                        className="hover:text-custom-red font-medium"
                      >
                        <a href={social.href} aria-label={social.label}>
                          {social.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
                  {sections.map((section, sectionIdx) => (
                    <div key={sectionIdx}>
                      <h3 className="mb-4 font-bold">{section.title}</h3>
                      <ul className="text-muted-foreground space-y-3 text-sm">
                        {section.links.map((link, linkIdx) => (
                          <li
                            key={linkIdx}
                            className="hover:text-custom-red font-medium"
                          >
                            <a href={link.href}>{link.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div ref={wrapperRef} className="w-full">
                <span
                  ref={textRef}
                  className="block whitespace-nowrap uppercase font-open-sans"
                  style={{ display: "inline-block" }}
                >
                  <span className="text-custom-red italic">E</span>
                  Parcel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
