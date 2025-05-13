'use client'
import {useEffect, useState} from "react";
import Image from "next/image";
import {Browser, getBrowserConfig} from "@/app/helpers";

export default function BrowserExtensionButton() {
  const [browserConfig, setBrowserConfig] = useState<Browser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Определяем браузер и устанавливаем конфигурацию
    const config = getBrowserConfig();
    setBrowserConfig(config);
    setIsLoading(false);
  }, []);

  // Показываем заглушку во время загрузки
  if (isLoading) {
    return (
      <div className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto">
        <span className="relative inline-flex items-center">
          <div className="w-6 h-6 mr-2 bg-blue-300 rounded-full animate-pulse"></div>
          <span className="w-24 h-4 bg-blue-300 rounded animate-pulse"></span>
        </span>
      </div>
    );
  }

  // Если по какой-то причине не удалось определить браузер, показываем общую версию
  if (!browserConfig) {
    return (
      <a data-nosnippet={true}
        className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
        href="https://chromewebstore.google.com/detail/youtube-summary-ai-with-g/ogihgbocgnbhhdcmcolhipjhkmkecpeg" 
        target="_blank" 
        rel="noreferrer"
      >
        <span className="relative inline-flex items-center">
          Get Extension
          <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
            -&gt;
          </span>
        </span>
      </a>
    );
  }

  return (
    <a data-nosnippet={true}
      className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
      href={browserConfig.link} 
      target="_blank" 
      rel="noreferrer"
    >
      <span className="relative inline-flex items-center">
        {browserConfig.logo &&
          <Image 
            src={browserConfig.logo} 
            width={24} 
            height={24} 
            alt={`${browserConfig.name} Browser Logo`} 
            className="mr-2"
            priority
            sizes="24px"
          />
        }
        Add to {browserConfig.name} {" "}
        <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
          -&gt;
        </span>
      </span>
    </a>
  );
} 