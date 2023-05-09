import Image from 'next/image';
import { useState, useEffect } from 'react';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const logos = [
    { image: 'amazon-prime.jpg' },
    { image: 'bbc-canada.png' },
    { image: 'Bein_sport.png' },
    { image: 'cbc.webp' },
    { image: 'Comedy-Central.png' },
    { image: 'espn-logo.png' },
    { image: 'FOX_Sports.png' },
    { image: 'nat-geo.jpg' },
    { image: 'Netflix.png' },
    { image: 'rmc-sports.png' },
    { image: 'sky-sports.png' },
    { image: 'sport1.webp' },
    { image: 'disney-channel.jpg' },
    { image: 'hbo.jpeg' },
    { image: 'nfl.webp' },
    { image: 'champions_league.jpg' },
  ];

  const seats = [...logos, ...logos, ...logos, ...logos];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % 26);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  ///
  const elementWidth = 160;
  const styleWidth = 'w-40';

  return (
    <div className="w-full overflow-hidden max-w-8xl bg-white  mx-auto px-10 relative">
      <div className="absolute top-0 right-0 bg-gradient-to-l from-white h-full w-1/12 z-10" />
      <div className="absolute top-0 left-0 bg-gradient-to-r from-white h-full w-1/12 z-10" />

      <ul
        className="flex items-center justify-center gap-2 list-none transition duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * elementWidth}px)` }}
      >
        {seats.map((logo, index) => (
          <li
            key={index}
            // element width
            className={`flex-shrink-0 w-40  ${styleWidth}`}
          >
            <Image
              src={`/images/logos/${logo.image}`}
              alt={logo.image}
              // fill
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carousel;
