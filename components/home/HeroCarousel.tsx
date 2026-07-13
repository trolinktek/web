'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

const slides = [
  { src: '/images/home/banner-1.webp', alt: 'Connected journeys wireless in-car integration banner' },
  { src: '/images/home/banner-2.webp', alt: 'Motorcycle smart navigation display banner' },
  { src: '/images/home/banner-3.webp', alt: 'Smart car screen and connected vehicle camera banner' },
] as const;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const show = useCallback((index: number) => {
    setActive((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(media.matches);
    updateMotionPreference();
    media.addEventListener('change', updateMotionPreference);
    return () => media.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  return <section
    id="top"
    className="group relative aspect-[2000/958] w-full overflow-hidden bg-black"
    aria-roledescription="carousel"
    aria-label="TrolinkTek product banners"
    tabIndex={0}
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
    onFocus={() => setPaused(true)}
    onBlur={() => setPaused(false)}
    onKeyDown={(event) => {
      if (event.key === 'ArrowLeft') show(active - 1);
      if (event.key === 'ArrowRight') show(active + 1);
    }}
  >
    <h1 className="sr-only">TrolinkTek automotive connectivity products</h1>
    {slides.map((slide, index) => <div
      className={`absolute inset-0 transition-opacity duration-700 ${active === index ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
      aria-hidden={active !== index}
      key={slide.src}
    >
      <Image
        src={slide.src}
        alt={active === index ? slide.alt : ''}
        fill
        priority={index === 0}
        sizes="100vw"
        className="object-contain"
      />
    </div>)}

    <button type="button" className="focus-ring absolute left-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/70 group-hover:opacity-100 group-focus-within:opacity-100 sm:left-6 sm:h-12 sm:w-12" onClick={() => show(active - 1)} aria-label="Previous banner"><ChevronLeft aria-hidden="true" /></button>
    <button type="button" className="focus-ring absolute right-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/70 group-hover:opacity-100 group-focus-within:opacity-100 sm:right-6 sm:h-12 sm:w-12" onClick={() => show(active + 1)} aria-label="Next banner"><ChevronRight aria-hidden="true" /></button>

    <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur-sm sm:bottom-5">
      {slides.map((slide, index) => <button type="button" className={`focus-ring h-2.5 rounded-full transition-all ${active === index ? 'w-7 bg-[#F5C400]' : 'w-2.5 bg-white/70 hover:bg-white'}`} onClick={() => show(index)} aria-label={`Show banner ${index + 1}`} aria-current={active === index ? 'true' : undefined} key={slide.src} />)}
    </div>
  </section>;
}
