'use client'

import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('./video-player'), {
  loading: () => <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg"></div>,
  ssr: false
});

export default function VideoPlayerWrapper() {
  return <VideoPlayer />;
} 