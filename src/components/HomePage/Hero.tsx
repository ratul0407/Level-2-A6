import { ArrowRight, ArrowUp, Package, Sun, Truck } from "lucide-react";
import factoryImg from "../../assets/home-grid/factory.jpg";
import joinImg from "../../assets/home-grid/join.jpg";
import truckImg from "../../assets/home-grid/truck.jpg";
import craneImg from "../../assets/home-grid/crane.jpg";
import excellenceImg from "../../assets/home-grid/excellence.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
gsap.registerPlugin(SplitText);
const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0, ease: "power1.inOut" },
    });
    const imgGridtl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "power2.inOut",
      },
    });
    const mySplitText = new SplitText(".hero-line-down", { type: "words" });
    const words = mySplitText.words;
    console.log(words);
    tl.from(words, {
      y: 100,
      autoAlpha: 0,
      duration: 0.5,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.out",
    })
      .from(
        ".transport",
        {
          x: -100,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.5"
      )
      .from(".hero-opacity", {
        opacity: 0,
        duration: 0.5,
      });
    imgGridtl.from(".img-grid div", {
      y: 100,
      opacity: 0,
      stagger: {
        each: 0.3,
      },
    });
  });

  return (
    <div className="mt-10 min-h-[100vh] lg:mt-20">
      <div className="">
        {/* top side */}
        <div className="w-full flex flex-col-reverse md:flex-row space-y-10 ">
          <div className="lg:w-1/2 overflow-hidden">
            <h1 className="font-open-sans text-3xl uppercase lg:text-5xl text-center leading-relaxed sm:text-left">
              <div className="overflow-hidden">
                <div className="overflow-hidden w-fit">
                  <span className="hero-line-down inline-block">
                    Pioneering the
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="overflow-hidden w-fit">
                    <span className="inline-block hero-line-down">
                      logistics{" "}
                    </span>
                  </div>
                  <div className="ml-2 inline-block -space-y-1 text-sm lowercase hero-opacity">
                    <div className="flex items-center">
                      <p>10K+</p>{" "}
                      <div className="bg-custom-red rounded-full p-1">
                        <ArrowUp className="size-4 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-600">parcel Delivered</p>
                  </div>{" "}
                </div>
                <div className="overflow-hidden w-fit">
                  <span className="hero-line-down inline-block">
                    landscape with
                  </span>{" "}
                </div>
              </div>
              <div className="">
                <div className="transport divide flex h-full w-fit items-center divide-[#e63956] rounded-full border px-4 py-2 text-xs lowercase mx-auto sm:mx-0 hover:bg-black transition-colors duration-400 hover:text-white">
                  <Package strokeWidth={"1px"} className="size-6" />
                  <Truck strokeWidth={"1px"} className="mx-2 size-6" />
                  <div className="min-h-full w-0.5 bg-[#e42030]"></div>
                  <p className="">Transportation every day</p>
                </div>
                <div className="overflow-hidden w-fit">
                  <span className="hero-line-down inline-block self-center">
                    cutting-edge
                  </span>
                </div>
              </div>
              <div className="overflow-hidden w-fit">
                <span className="hero-line-down inline-block">
                  cargo management
                </span>
              </div>
            </h1>
          </div>

          {/*grid */}
          <div className="img-grid lg:w-1/2 grid grid-cols-6 gap-4 content-start">
            <div className="hidden md:block col-span-6 lg:col-span-3">
              <img src={factoryImg} className="aspect-video rounded-4xl" />
            </div>
            <div className="relative rounded-4xl col-span-6 lg:col-span-3">
              <button className="absolute -top-5 -left-6 max-w-[20ch] bg-custom-red text-white px-3 rounded-full flex items-center gap-1 py-1">
                <p>Join us</p>
                <div className="bg-black p-2 rounded-full">
                  <ArrowUp className="rotate-45 inline hover:rotate-90 duration-300 transition-transform" />
                </div>
              </button>
              <img
                src={joinImg}
                className="aspect-video rounded-4xl object-cover"
              />
            </div>
            <div className="hidden md:block bg-custom-red text-white px-8 py-9 rounded-4xl col-start-2 col-span-3">
              <div className="text-xl uppercase">
                <p className="inline">
                  <Sun className="inline animate-spin" /> Efficiency
                </p>{" "}
                <br />
                <p className="linline">
                  Redefined <Sun className="inline animate-spin" /> Your
                </p>{" "}
                <p>
                  Cargo, Our <ArrowRight className="inline" />
                </p>{" "}
                Logistics Experience
              </div>
            </div>
            <div className="hidden md:inline-block -space-y-1 lowercase col-span-2">
              <div className="flex items-center">
                <p className="text-4xl">100+</p>
                <div className="ml-6 flex items-center">
                  <div className="bg-custom-red rounded-full p-1">
                    <ArrowUp className="size-4 text-white" />
                  </div>
                  <span className="text-custom-red text-sm">+92%</span>
                </div>
              </div>
              <p className="text-gray-600 text-xl">Shipments per day</p>
            </div>
          </div>
        </div>
        {/* bottom side */}
        <div className="flex justify-between items-center ">
          <div className="w-1/2 space-y-5 lg:space-y-10">
            <div className="w-fit  rounded-full border border-custom-red px-4 py-1 text-custom-red hover:bg-custom-red hover:text-white transition-all duraiton-300">
              <Sun className="inline-block mr-3 animate-spin" />
              efficiency unleased
            </div>
            <p className="font-medium max-w-[30ch]">
              Ready to embark on a rewarding{" "}
              <span className="text-gray-500">logistics journey</span>? Join{" "}
              <span className="text-gray-600">EParcel</span> now and space the
              future of efficient cargo management.
            </p>
            <div className="space-x-5 lg:space-y-8">
              <button className="rounded-full bg-[#e63946] px-6 py-1 text-white">
                Request
              </button>
              <button className="rounded-full border border-gray-400 px-6 py-1 text-gray-400">
                Read More
              </button>
            </div>
          </div>
          {/* the grid layout */}
          <div className="w-1/2 grid grid-cols-3 gap-5">
            <div>
              <img
                src={truckImg}
                className="object-cover object-bottom-right rounded-4xl aspect-video"
              />
            </div>
            <div>
              <img
                src={craneImg}
                className="object-cover object-left rounded-4xl aspect-square"
              />
            </div>
            <div className="flex flex-col-reverse">
              <img
                style={{ objectPosition: "top 10% left 10%" }}
                src={excellenceImg}
                className="aspect-video object-cover  rounded-4xl"
              />
              <div className="hidden md:inline-block -space-y-1 lowercase col-span-2">
                <div className="flex items-center">
                  <p className="text-4xl">200+</p>
                  <div className="ml-6 flex items-center">
                    <div className="bg-custom-red rounded-full p-1">
                      <ArrowUp className="size-4 text-white" />
                    </div>
                    <span className="text-custom-red text-sm">+152%</span>
                  </div>
                </div>
                <p className="text-gray-600 text-xl">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
