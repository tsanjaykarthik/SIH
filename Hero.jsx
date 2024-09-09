import React from 'react';

const Hero = () => {
  return (
    <section className="flex relative flex-col self-stretch px-16 pt-80 pb-72 mt-20 w-full text-7xl text-center text-white border border-solid border-slate-400 min-h-[860px] shadow-[1px_5px_4px_rgba(0,0,0,1)] max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebb7af1430691124d7c876dc873da0db8a71feab1eef51d1041dd69d3e03ec86?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="" className="object-cover absolute inset-0 size-full" />
      <h2>
        BID SMART. <br /> BE SMARTER.
      </h2>
    </section>
  );
};

export default Hero;
