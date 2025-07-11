import React from 'react';

const HelloSection = () => {
  return (
    <section className="relative h-[750px] pt-8">
      <p className="w-[280px] rounded-2xl bg-gray-300/70 px-5 py-5 text-2xl text-black">
        <span className="bold text-4xl">Hello, my friend!</span>
        <hr />
        This page is dedicated to delicious recipes from all over the world.
        Here you can view a recipe and delight your eyes even if you don’t plan
        to cook it!
      </p>
      <div className="absolute bottom-0 left-0 flex flex-row gap-4">
        <img src="/images/svg-food-1.svg" alt="Food-svg" className="w-[90px]" />
        <img src="/images/svg-food-2.svg" alt="Food-svg" className="w-[90px]" />
        <img src="/images/svg-food-3.svg" alt="Food-svg" className="w-[90px]" />
      </div>
      <img
        src="/images/svg-food-smile.svg"
        alt="Smile-svg"
        className="absolute right-0 bottom-0 w-[90px]"
      />
    </section>
  );
};

export default HelloSection;
