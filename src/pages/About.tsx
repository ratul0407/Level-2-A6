import { Button } from "@/components/ui/button";
import aboutMainImg from "../assets/images/about-main.jpg";
import logoSrc from "../assets/icons/logo.svg";
import { Link } from "react-router";
interface AboutProps {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const About = ({
  title = "About Us",
  description = "We are the only Bangladeshi company that will deliver you packages nationwide so that you can be hassle free.",
  mainImage = {
    src: aboutMainImg,
    alt: "placeholder",
  },
  breakout = {
    src: logoSrc,
    alt: "logo",
    title: "Our Mission",
    description:
      "Our mission is to connect people and businesses across the country through trusted parcel delivery. Every delivery is more than just a package—it’s a promise delivered.",
    buttonText: "Discover more",
    buttonUrl: "/",
  },
}: AboutProps = {}) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-14 grid gap-5 text-center items-stretch md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <img
                src={breakout.src}
                alt={breakout.alt}
                className="mr-auto h-12"
              />
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto" asChild>
                <Link to={breakout.buttonUrl}>{breakout.buttonText}</Link>
              </Button>
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <div>
                <p className="mb-2 text-lg font-semibold">Meet Our Team</p>
                <p className="text-muted-foreground">
                  Behind every successful delivery is a passionate team working
                  round the clock. From our friendly support staff to our
                  skilled delivery partners.
                </p>
              </div>
              <Button variant="outline" className="mr-auto" asChild>
                <Link to={breakout.buttonUrl}>{breakout.buttonText}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
