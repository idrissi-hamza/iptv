import Logo from 'components/Logo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse gap-4 md:flex-row-reverse md:items-center px-6 sm:px-20 mb-10 md:mt-6 mt-10 max-w-[100rem] mx-auto"
    >
      <div className=" md:w-[60%]  ">
        <Image
          src="/images/herofanimage.jpg"
          alt="hero fan image"
          // fill
          width={2000}
          height={2000}
        />
      </div>
      <div className="flex flex-col space-y-5 md:w-1/3 max-w-lg mr-auto ">
        <h1 className=" text-4xl font-bold  pb-4 leading-snug ">
          The Most Powerful & <br className="hidden md:block" />
          Reliable IPTV <br className="hidden md:block" /> Subscription Service
        </h1>
        <div className=" text-lg">
          with{' '}
          <span className=" text-gray-700 font-bold tracking-wide select-none cursor-pointer pb-[2px] mx-1">
            MOV<span className="text-yellow-400">IPTV</span>
          </span>{' '}
          enjoy +12 000 Live worldwide Tv Channels & +60.000 VODs(Movies &
          Series). The Best IPTV for any device from any Location{' '}
        </div>
        <Link
          href="#"
          className=" flex items-center gap-2 mr-auto px-4 py-2 cursor-pointer bg-yellow-400 rounded-md text-neutral-50 font-bold text-lg"
        >
          Pricing
          <AiOutlineArrowRight className="font-bold text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
