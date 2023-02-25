import React from "react";

const Hero = () => {
  return (
    <section className="max-w-[650px] mx-auto lg:grid lg:grid-cols-2 lg:max-w-[1100px]">
      <article className="order-last">
        <div className="bg-[url('/images/image-hero-mobile.png')] lg:bg-[url('/images/image-hero-desktop.png')]  bg-cover aspect-square lg:hidden"></div>
        <img className="hidden lg:block" src="/images/image-hero-desktop.png" alt="" />
      </article>
      <article>
        <h2 className="font-bold text-3xl my-4 text-center lg:text-[60px] lg:text-start">Make remote work</h2>
        <p className="text-center text-medium-gray text-base px-4">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="border-2 border-black mx-auto block px-4 py-2 rounded-2xl text-white bg-black text-base my-4 hover:bg-white hover:text-black transition duration-200">Learn more</button>

        <section className="flex justify-evenly items-center my-12">
          <div className="max-w-[70px]">
            <img src="/images/client-databiz.svg" alt="" />
          </div>
          <div className="max-w-[50px]">
            <img src="/images/client-audiophile.svg" alt="" />
          </div>
          <div className="max-w-[70px]">
            <img src="/images/client-meet.svg" alt="" />
          </div>
          <div className="max-w-[70px]">
            <img src="/images/client-maker.svg" alt="" />
          </div>
        </section>
      </article>
    </section>
  );
};

export default Hero;
