'use client'
import Image, {StaticImageData} from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/chrome_logo.png";
import Avatar02 from "@/public/images/brave_logo.png";
import Avatar03 from "@/public/images/firefox_logo.png";
import Avatar04 from "@/public/images/arc_logo.png";
import Avatar05 from "@/public/images/edge_logo.png";
import Avatar06 from "@/public/images/zen_logo.svg";
import {getBrowserConfig} from "@/app/helpers";
import {useEffect, useState} from "react";
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('./video-player'), {
  ssr: false
});

export interface Browser {
  name: string;
  link: string;
  logo: StaticImageData;
}

export default function HeroHome() {
  const [browserConfig, setBrowserConfig] = useState<Browser>();
    useEffect(() => {
      setBrowserConfig(getBrowserConfig());
    }, []);

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-5 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50 bg-white"
                  src={Avatar01}
                  style={{height: "32px"}}
                  width={32}
                  height={32}
                  alt="Chrome Logo"
                  loading="lazy"
                />
                <Image
                    className="box-content rounded-full border-2 border-gray-50 bg-white"
                    src={Avatar05}
                    style={{height: "32px"}}
                    width={32}
                    height={32}
                    alt="Edge Logo"
                    loading="lazy"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50 bg-white"
                  src={Avatar03}
                  style={{height: "32px"}}
                  width={32}
                  height={32}
                  alt="Firefox Logo"
                  loading="lazy"
                />
                <Image
                    className="box-content rounded-full border-2 border-gray-50 bg-white"
                    src={Avatar02}
                    style={{height: "32px"}}
                    width={32}
                    height={32}
                    alt="Brave Logo"
                    loading="lazy"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50 bg-white"
                  src={Avatar04}
                  style={{height: "32px"}}
                  width={32}
                  height={32}
                  alt="Arc Logo"
                  loading="lazy"
                />
                <Image
                    className="box-content rounded-full border-2 border-gray-50 bg-white"
                    src={Avatar06}
                    style={{height: "32px"}}
                    width={32}
                    height={32}
                    alt="Zen Logo"
                    loading="lazy"
                />
              </div>
            </div>
            <h1
              className="mb-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Clarify AI
            </h1>
            <h2
              className="mb-6 text-3xl font-semibold text-gray-700 md:text-4xl"
              data-aos="zoom-y-out"
              data-aos-delay={200}
            >
              Your AI Assistant
            </h2>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                One click. Instant YouTube summaries - quick, clean, effortless.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a data-nosnippet={true}
                      className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                      href={browserConfig?.link} target="_blank" rel="noreferrer"
                  >
                    <span className="relative inline-flex items-center">
                        {browserConfig?.logo &&
                            <Image src={browserConfig?.logo} width={24} height={24} alt={`${browserConfig?.name} Browser Logo`} className={"mr-2"}/>
                        }
                      Add to {browserConfig?.name} {" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mx-auto max-w-4xl"
          >
            <VideoPlayer />
          </div>
        </div>
      </div>
    </section>
  );
}
