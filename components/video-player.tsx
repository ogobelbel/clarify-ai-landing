import { useState, useEffect, Suspense, useRef } from 'react';
import Image from 'next/image';
import LogoIcon from '@/public/icons/logo.svg';

type ConnectionSpeed = 'low' | 'medium' | 'high';

interface ConnectionDetails {
  type: ConnectionSpeed;
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  deviceWidth?: number;
  userAgent?: string;
}

// Компонент для отображения видео с указанным качеством
function VideoContent({ connectionDetails, onVideoLoaded }: { connectionDetails: ConnectionDetails, onVideoLoaded: () => void }) {
  const { type: connectionSpeed } = connectionDetails;
  const videoRef = useRef<HTMLVideoElement>(null);
  
  return (
    <video
      ref={videoRef}
      loop={true}
      className="rounded-2xl shadow-2xl"
      autoPlay={true}
      muted={true}
      playsInline={true}
      preload="auto"
      width="100%"
      style={{ maxHeight: '80vh' }}
      onPlaying={() => {
        onVideoLoaded();
      }}
    >
      {/* Высокое качество для быстрых соединений на больших экранах */}
      {connectionSpeed === 'high' && (
        <>
          <source 
            src="/video/1080.mp4" 
            type="video/mp4"
            media="(min-width: 1200px)"
          />
          <source 
            src="/video/720.mp4" 
            type="video/mp4"
            media="(min-width: 768px) and (max-width: 1199px)"
          />
          <source 
            src="/video/480.mp4" 
            type="video/mp4"
            media="(max-width: 767px)"
          />
        </>
      )}

      {/* Среднее качество для средних соединений */}
      {connectionSpeed === 'medium' && (
        <>
          <source 
            src="/video/720.mp4" 
            type="video/mp4"
            media="(min-width: 768px)"
          />
          <source 
            src="/video/480.mp4" 
            type="video/mp4"
            media="(max-width: 767px)"
          />
        </>
      )}

      {/* Низкое качество для медленных соединений */}
      {connectionSpeed === 'low' && (
        <>
          <source 
            src="/video/480.mp4" 
            type="video/mp4"
            media="(min-width: 768px)"
          />
          {/* Для мобильных при низкой скорости специально используем 360p */}
          <source 
            src="/video/360.mp4" 
            type="video/mp4"
            media="(max-width: 767px)"
          />
        </>
      )}
      
      {/* Запасной вариант в случае, если ни один из источников не подходит */}
      <source src="/video/360.mp4" type="video/mp4" />
    </video>
  );
}

// Компонент заглушка, который показывается во время загрузки видео
function VideoSkeleton() {
  return (
    <div 
      className="relative rounded-2xl shadow-2xl bg-black" 
      style={{ 
        width: '100%', 
        height: '0',
        paddingBottom: '56.25%', // Соотношение сторон 16:9
        maxHeight: '80vh',
        overflow: 'hidden'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Адаптивный контейнер для логотипа - размер зависит от ширины родителя */}
        <div className="w-1/4 max-w-[180px] min-w-[80px] relative aspect-square">
          <Image
            src={LogoIcon}
            alt="Clarify AI Logo"
            fill
            sizes="(max-width: 768px) 80px, (max-width: 1200px) 120px, 180px"
            className="animate-pulse object-contain"
            priority={true}
            loading="eager"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

// Компонент для асинхронного определения скорости соединения
function ConnectionSpeedDetector({ 
  onConnectionDetected 
}: { 
  onConnectionDetected: (details: ConnectionDetails) => void 
}) {
  useEffect(() => {
    // Функция определения скорости соединения
    const determineConnectionSpeed = () => {
      try {

        // Проверяем скорость соединения с помощью Navigator API
        const connection = (navigator as any).connection || 
                          (navigator as any).mozConnection || 
                          (navigator as any).webkitConnection;
        
        const effectiveType = connection?.effectiveType;
        const downlink = connection?.downlink; // скорость в Mbps
        const rtt = connection?.rtt; // время задержки в мс
        const deviceWidth = window.innerWidth;
        const userAgent = navigator.userAgent;
        // Логика определения типа соединения
        let speed: ConnectionSpeed = 'high';
        
        if (effectiveType === 'slow-2g' || effectiveType === '2g' || (downlink && downlink < 1)) {
          speed = 'low';
        } else if (effectiveType === '3g' || (downlink && downlink < 5)) {
          speed = 'medium';
        }
        
        onConnectionDetected({
          type: speed,
          effectiveType,
          downlink,
          rtt,
          deviceWidth,
          userAgent
        });
      } catch (error) {
        // В случае ошибки используем высокое качество по умолчанию
        console.error('Ошибка при определении скорости соединения:', error);
        onConnectionDetected({
          type: 'high',
          deviceWidth: window.innerWidth,
          userAgent: navigator.userAgent
        });
      }
    };

    // Запускаем определение скорости соединения сразу
    determineConnectionSpeed();
    
    return () => {};
  }, [onConnectionDetected]);

  return null;
}

export default function VideoPlayer() {
  const [connectionDetails, setConnectionDetails] = useState<ConnectionDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Предзагрузим логотип при первом рендере
  useEffect(() => {
    // Предзагрузка изображения через прямой доступ к DOM
    const preloadLogoImage = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = '/icons/logo.svg';
      link.as = 'image';
      document.head.appendChild(link);
    };
    
    preloadLogoImage();
  }, []);

  // Обработчик события загрузки видео
  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {/* Всегда показываем скелетон, если идет загрузка */}
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <VideoSkeleton />
        </div>
      )}
      
      <Suspense fallback={<VideoSkeleton />}>
        {!connectionDetails ? (
          <>
            <div className={isLoading ? 'opacity-0' : 'opacity-100'}>
              <VideoSkeleton />
            </div>
            <ConnectionSpeedDetector 
              onConnectionDetected={(details) => setConnectionDetails(details)} 
            />
          </>
        ) : (
          <div className={isLoading ? 'opacity-0' : 'opacity-100'}>
            <VideoContent 
              connectionDetails={connectionDetails} 
              onVideoLoaded={handleVideoLoaded}
            />
          </div>
        )}
      </Suspense>
    </div>
  );
} 