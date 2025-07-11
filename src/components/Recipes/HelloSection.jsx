import React from 'react';

const HelloSection = () => {
  return (
    <section
      className="relative min-h-[80vh] pt-4"
      style={{
        backgroundImage: `url('/images/food-1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <p className="ml-4 w-[280px] rounded-2xl bg-gray-300/70 px-5 py-5 text-2xl text-black">
        <span className="bold text-4xl">Hello, my friend!</span>
        <hr />
        This page is dedicated to delicious recipes from all over the world.
        Here you can view a recipe and delight your eyes even if you don’t plan
        to cook it!
      </p>
      <div className="absolute bottom-2 left-2 flex flex-row gap-4">
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
