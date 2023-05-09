import React from 'react';
import { GiElectric } from 'react-icons/gi';
import { MdOndemandVideo, MdOutlineImportantDevices } from 'react-icons/md';
import { ImConnection } from 'react-icons/im';
import { BiSupport } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';

const FeatureElement = ({ title, description, Icon }) => {
  return (
    <li className="p-4 pb-6 shadow-xl shadow-yellow-400/20 max-w-[12rem] flex flex-col items-center gap-2 border border-yellow-200/40 hover:shadow-2xl hover:shadow-yellow-200 cursor-pointer bg-yellow-100/20 hover:scale-105  transition  rounded-md">
      <Icon className="text-5xl text-yellow-500" />
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
      description:
        'Uninterrupted viewing with powerful, secure, and encrypted servers.',
      Icon: ImConnection,
    },
    {
      title: 'Instant Support Assistance',
      description:
        'Expert assistance and rapid response times for your satisfaction.',
      Icon: BiSupport,
    },
    {
      title: 'compatible with all devices',
      description:
        'Our IPTV service is compatible with al your devices,Smart TVs, laptops, android...',
      Icon: MdOutlineImportantDevices,
    },
    {
      title: 'Fair, Simple Pricing',
      description:
        'We assure that we are providing the best IPTV service at Reasonable price comparing other providers.',
      Icon: GiReceiveMoney,
    },
  ];

  return (
    <section className="bg-neutral-50 py-36   flex flex-col gap-2">
      <div className="mx-auto max-w-7xl bg-red-30 ">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-4">
          Best Features
        </h1>
        <p className="max-w-sm text-center mx-auto font-semibold text-neutral-600 mb-10">
          Stream Live Matches and full seasons of exclusive series, hit movies,
          kids’ shows and much more
        </p>
        <ul className="flex flex-col items-center sm:items-stretch gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {features.map((el, id) => (
            <FeatureElement
              key={id}
              title={el.title}
              Icon={el.Icon}
              description={el.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
