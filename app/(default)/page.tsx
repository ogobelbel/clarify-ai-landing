export const metadata = {
  title: "YouTube Summary Extension - AI-powered Video Summarizer",
  description: "Generate AI-powered summaries of YouTube videos instantly.",
  openGraph: {
    title: "YouTube Summary Extension - AI-powered Video Summarizer",
    description: "Generate AI-powered summaries of YouTube videos instantly.",
    type: "website",
    url: "https://clarify-ai.org",
  },
  alternates: {
    canonical: "https://clarify-ai.org"
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      noimageindex: true,
      'notranslate': true,
    },
  },
  other: {
    'google': 'notranslate',
    'format-detection': 'telephone=no'
  }
};

import Hero from "@/components/hero-home";

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
