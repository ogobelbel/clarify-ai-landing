import "./css/style.css";

import {Inter} from "next/font/google";
import Script from "next/script";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata = {
    title: "Clarify AI",
    description:
        "Generate AI-powered summaries of YouTube videos instantly.",
    keywords: [
        "YouTube summary",
        "YouTube Summary Extension",
        "Clarify AI",
        "YouTube AI",
        "AI Video Summarizer",
        "YouTube transcript",
        "YouTube notes",
        "Summarize YouTube videos",
        "YouTube TLDR",
        "YouTube text summary",
        "AI YouTube tool",
        "AI-generated summaries",
        "YouTube quick summary",
        "Automatic YouTube transcript",
        "YouTube caption AI",
        "Video summarization AI",
        "Best YouTube summarizer",
        "AI-powered video summary",
        "Convert YouTube to text",
        "AI-powered note-taking",
        "YouTube academic tool",
        "Efficient YouTube learning",
    ],
    metadataBase: new URL("https://clarify-ai.org/"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        url: "https://clarify-ai.org/",
        title: "YouTube Summary Extension - AI-powered Video Summarizer",
        description:
            "Generate AI-powered summaries of YouTube videos instantly.",
        siteName: "YouTube Summary Extension",
        images: [
            {
                url: "https://clarify-ai.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon128.33c1902a.png",
                width: 1200,
                height: 630,
                alt: "YouTube Summary Extension Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
        <body
            className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
        >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
        </div>
        <Script
            id="json-ld"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": ["WebApplication", "SoftwareApplication"],
                    "name": "YouTube Summary Extension",
                    "applicationCategory": "BrowserApplication",
                    "operatingSystem": "All",
                    "url": "https://clarify-ai.org/",
                    "image": "https://clarify-ai.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon128.33c1902a.png",
                    "description": "Generate AI-powered summaries of YouTube videos instantly.",
                    "sameAs": [
                        "https://chromewebstore.google.com/detail/youtube-summary-ai-with-g/ogihgbocgnbhhdcmcolhipjhkmkecpeg",
                        "https://addons.mozilla.org/en-US/firefox/addon/youtube-summary/",
                        "https://microsoftedge.microsoft.com/addons/detail/youtube-summary-ai-with-g/akjfbgldngciabajgkmmbdlhpkciffgc"
                    ],
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.6",
                        "reviewCount": "404"
                    },
                    "author": {
                        "@type": "Person",
                        "name": "Alex"
                    },
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "featureList": [
                        "Instant YouTube video summaries",
                        "AI-powered content analysis",
                        "Browser extension integration",
                        "Multi-language support"
                    ],
                    "browserRequirements": "Requires JavaScript. Requires HTML5.",
                    "softwareVersion": "1.0.0",
                    "applicationSubCategory": "Productivity Software"
                }),
            }}
        />
        </body>
        </html>
    );
}
