'use client'

export default function VideoPlayer() {
  return (
    <video
      loop={true}
      className="rounded-2xl shadow-2xl"
      autoPlay={true}
      muted={true}
      playsInline={true}
      preload="auto"
      width="100%"
      style={{ maxHeight: '80vh' }}
    >
      <source src="/video/presentation-1080.mp4" type="video/mp4"/>
    </video>
  );
} 