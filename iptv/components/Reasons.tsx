import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiCheck } from 'react-icons/bi';

const Reasons = () => {
  return (
    <section className="px-6  min-h-[80vh]    bg-neutral-50 flex flex-col md:flex-row items-center justify-center  pb-10">
      <div className="relative flex h-full w-full md:w-1/2 overflow-hidden">
        <div className="absolute inset-0 top-[110px] left-10 animate-trans-right hidden md:block ">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgb(219 230 219)"
              d="M42,-67.9C52.5,-58.6,57.7,-43.6,58.4,-30.2C59.2,-16.7,55.5,-4.6,53.1,7.2C50.8,19,49.8,30.6,44.8,41.8C39.8,53,30.9,63.9,19.4,68.1C8,72.3,-5.9,69.8,-18.8,65.4C-31.7,61,-43.7,54.6,-54.9,45.5C-66.1,36.3,-76.6,24.4,-77.8,11.6C-79.1,-1.3,-71.1,-15,-61.3,-24.5C-51.5,-34,-40,-39.1,-29.5,-48.4C-19,-57.7,-9.5,-71.1,3.1,-75.9C15.7,-80.8,31.5,-77.2,42,-67.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>{' '}
        <div
          className="absolute inset-0 top-5 animate-rotate "
          // style={{ borderRadius: '76% 16% 83% 24% / 62% 41% 76% 32%' }}
        >
          {/* <Image
          src="/images/familly.jpg"
          alt="hero fan image"
          className="border "
          style={{ borderRadius: '76% 16% 83% 24% / 62% 41% 76% 15%' }}
          // fill
          width={360}
          height={540}
        /> */}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FADB5F"
              d="M42,-67.9C52.5,-58.6,57.7,-43.6,58.4,-30.2C59.2,-16.7,55.5,-4.6,53.1,7.2C50.8,19,49.8,30.6,44.8,41.8C39.8,53,30.9,63.9,19.4,68.1C8,72.3,-5.9,69.8,-18.8,65.4C-31.7,61,-43.7,54.6,-54.9,45.5C-66.1,36.3,-76.6,24.4,-77.8,11.6C-79.1,-1.3,-71.1,-15,-61.3,-24.5C-51.5,-34,-40,-39.1,-29.5,-48.4C-19,-57.7,-9.5,-71.1,3.1,-75.9C15.7,-80.8,31.5,-77.2,42,-67.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>{' '}
        <div className="w-full z-10 animate-rotate delay-500 uration-700 ">
          <svg
            className="z-10"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="img-pattern"
                x="0"
                y="0"
                width="1"
                height="1"
              >
                <image
                  href="/images/familly.jpg"
                  x="-10"
                  y="-80"
                  width="200"
                  height="300"
                />
              </pattern>
            </defs>
            <path
              fill="url(#img-pattern)"
              d="M34.3,-49.4C46.5,-45.6,59.7,-39.4,69,-28.7C78.3,-17.9,83.7,-2.5,80.7,10.9C77.7,24.4,66.4,36.1,55.5,47.3C44.6,58.6,34.1,69.5,20.6,76.3C7.1,83,-9.4,85.7,-25.2,82.6C-41,79.4,-56,70.5,-60.9,57.1C-65.9,43.7,-60.7,25.8,-57.8,11.5C-54.8,-2.8,-54.1,-13.6,-50.1,-23.2C-46.2,-32.7,-39,-41.2,-30.1,-46.4C-21.2,-51.7,-10.6,-53.8,0.2,-54.2C11.1,-54.6,22.2,-53.2,34.3,-49.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col space-y-8 mx-auto md:w-1/2 max-w-lg mr-auto  ">
        <h1 className=" text-4xl font-bold   leading-snug  ">
          Share the best moments with your familly and loved ones, and watch the
          best.
        </h1>
        <ul className='mb-10'>
          {[
            'watch major competitons',
            'The best wildlife, news and kids channels',
            'Latest movies and TV series in the BiWorld.',
            'Full HD, HD, 4K Channels.',
            '100% Satisfaction guarantee.',
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-1   pb-2"
            >
              <BiCheck className="text-green-600 text-2xl font-bold" />
              <span className="text-cyan-800 text-lg font-semibold">{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href="#"
          className=" flex items-center gap-2 mr-auto px-4 py-2 cursor-pointer bg-yellow-400 rounded-md text-neutral-50 font-bold text-lg transition duration-300 ease-in-out  hover:shadow-md hover:scale-105 active:scale-100"
          // style={{ borderRadius: '24% 72% 12% 92% / 62% 67% 34% 32%' }}
        >
          Get you IPTV Subsription Now
          <AiOutlineArrowRight className="font-bold text-2xl" />
        </Link>
      </div>
    </section>
  );
};

export default Reasons;
