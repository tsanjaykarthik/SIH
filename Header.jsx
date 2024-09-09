import React from 'react';

const Header = () => {
  const navItems = ['Home', 'About Us', 'Our Aim', 'Contact us'];

  return (
    <header className="flex flex-wrap gap-10 w-full text-2xl text-white max-w-[1354px] max-md:max-w-full">
      <h1 className="grow shrink text-5xl w-[154px] max-md:text-4xl">FREIGHT X</h1>
      <nav className="flex gap-10 my-auto max-md:max-w-full">
        {navItems.map((item, index) => (
          <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={index} className="hover:underline">
            {item}
          </a>
        ))}
      </nav>
      <div className="flex gap-4 self-start">
        <button className="overflow-hidden px-3.5 py-2 border border-white border-solid rounded-[50px] shadow-[0px_0px_4px_rgba(255,255,255,1)]">
          Sign Up
        </button>
        <button className="overflow-hidden px-5 py-2 border border-white border-solid rounded-[51px] shadow-[0px_0px_4px_rgba(255,255,255,1)]">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
