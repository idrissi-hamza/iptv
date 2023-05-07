import React from 'react';
import Logo from '../Logo';
import Link from 'next/link';

const Navbar = () => {
  //links nav bar
  const navLinks = [
    { id: '1', link: '#home', title: 'Home' },
    { id: '2', link: '#trial', title: '7-day Trial' },
    { id: '3', link: '#featues', title: 'Features' },
    { id: '4', link: '#contact', title: 'Contact Us' },
    { id: '4', link: '#pricing', title: 'Pricing' },
  ];
  return (
    <ul className='flex ml-auto  tracking-wider'>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className="block px-4 py-2  group cursor-pointer last:bg-yellow-400 last:rounded-md last:text-neutral-50"
        >
          <Link href={link.link} className=' group-hover:border-yellow-400 group-hover:border-b-2  ' > {link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  return (
    <div className="bg-neutral-600/70c nbg-white h-16  flex items-center md:px-20 px:6 relative transition shadow-sm px-10">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
