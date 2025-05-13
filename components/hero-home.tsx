import PageIllustration from "@/components/page-illustration";
import BrowserExtensionButton from "@/components/browser-extension-button";
import VideoPlayerWrapper from "@/components/video-player-wrapper";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-24 md:pb-5 md:pt-24">
          <div className="pb-6 text-center md:pb-6">
            <h1
              className="pb-6 pt-6 text-5xl font-bold md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Clarify AI
            </h1>
            <h2
              className="text-xl font-semibold text-gray-700 md:text-3xl"
              data-aos="zoom-y-out"
              data-aos-delay={200}
            >
              Your AI Assistant
            </h2>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-4 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                One click. Instant YouTube summaries - quick, clean, effortless.
              </p>
              <div className="relative before:absolute">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <BrowserExtensionButton />
                </div>
              </div>
            </div>
          </div>
          <div
            className="mx-auto max-w-4xl"
          >
            <VideoPlayerWrapper />
          </div>
        </div>
      </div>
    </section>
  );
}
