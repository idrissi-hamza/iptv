import React from 'react';
import { BiCheck } from 'react-icons/bi';
import Image from 'next/image';

const features: string[] = [
  '+12.000 Live Channels',
  '+60.000 VODs',

  '99,9% uptime',
  ' Android, Pc, SmartTV',
  '4k,FHD,HD,SD Quality',
  'Available Worldwide',
  'Real support 24/7',
];

type Plan = {
  title: string;
  price: number;
  period: string;
  features: string[];
};
const plansContent: Plan[] = [
  { title: 'Starter', price: 12, period: '1 Month', features },
  { title: 'Basic', price: 25, period: '3 Month', features },
  { title: 'Most Polpular', price: 42, period: '6 Month', features },
  { title: 'Best Value', price: 66, period: '12 Month', features },
];

const PlansSection = () => {
  return (
    <section className=" min-h-screen py-10 ">
      <div className='mx-4'>
        <h1 className="text-center font-bold text-3xl">
          Choose your IPTV Plan!
        </h1>
        <p className="text-center font-semibold text-cyan-800">
          We have different plans for different needs
        </p>
        <p className="text-center mb-8 text-cyan-800">
          Enjoy your preferred channels from anywhere. without the need for
          cables.
        </p>
      </div>
      <div className=" flex justify-center items-center">
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6  ">
          {plansContent.map((el, index) => (
            <div
              key={index}
              className="border gap-2 flex flex-col bg-neutral-100 group cursor-pointer hover:shadow hover:bg-neutral-300"
            >
              <div className="bg-neutral-600 text-neutral-50 text-xl font-bold text-center p-2 font-mono uppercase">
                {el.title}
              </div>
              <div className="px-4">
                {' '}
                <div className="p-10 text-center text-neutral-500 leading-3">
                  <h3 className="text-5xl font-bold relative">
                    {el.price}
                    <span className="absolute text-sm">€</span>
                  </h3>
                  <span>{el.period}</span>
                </div>
                <ul className=" flex flex-col gap-2">
                  {el.features.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-1  last:border-0 border-b-2 pb-2"
                    >
                      <BiCheck className="text-green-600 text-2xl font-bold" />
                      <span className="text-cyan-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="text-center  uppercase m-4 py-2 bg-neutral-200 font-bold text-yellow-500 group-hover:bg-yellow-400 group-hover:text-yellow-50 rounded transition duration-300 ease-in-out  hover:shadow-md hover:scale-105 active:scale-100">
                Subscribe Now !
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
