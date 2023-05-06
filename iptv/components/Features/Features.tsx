import React from 'react';
import { GiElectric } from 'react-icons/gi';
import { MdOndemandVideo } from 'react-icons/md';
import { ImConnection } from 'react-icons/im';
import { BiSupport } from 'react-icons/bi';

const FeatureElement = ({ title, description, Icon }) => {
  return (
    <li className="p-4 pb-6 shadow-xl shadow-yellow-400/20 max-w-[12rem] flex flex-col items-center gap-2 border border-yellow-200/40 hover:shadow-2xl hover:shadow-yellow-200 cursor-pointer bg-yellow-100/20 hover:scale-105  transition  rounded-md">
      <Icon className='text-5xl text-yellow-500' />
      <h3 className="font-bold text-xl text-center pb-4"> {title}</h3>
      <p className="text-sm text-neutral-600 font-semibold">{description}</p>
    </li>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Fastest IPTV Service',
      description: 'Servers in every country for the fastest IPTV experience.',
      Icon: GiElectric,
    },
    {
      title: 'High Streaming Quality',
      description: 'Top-quality streaming in 4K, FHD, HD, and SD formats.',
      Icon: MdOndemandVideo,
    },
    {
      title: '99% Uptime Service',
      description: 'Uninterrupted viewing with powerful, secure, and encrypted servers.',
      Icon: ImConnection,
    },
    {
      title: 'Instant Support Assistance',
      description: 'Expert assistance and rapid response times for your satisfaction.',
      Icon: BiSupport,
    },
  ];
  
  return (
    <section className="mx-auto max-w-4xl flex flex-col gap-2 mt-36">
      <h1 className='text-4xl font-bold text-yellow-400 text-center'>Best Features</h1>
      <p className='max-w-sm text-center mx-auto font-semibold text-neutral-600 mb-10'>
        Stream Live Matches and full seasons of exclusive series, hit movies, kids’ shows and much more
      </p>
      <ul className="flex gap-10 mx-aut  self-center ">
        {features.map((el, id) => (
          <FeatureElement
            key={id}
            title={el.title}
            Icon={el.Icon}
            description={el.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Features;
