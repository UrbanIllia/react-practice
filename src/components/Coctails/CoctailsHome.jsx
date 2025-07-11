import { LuArrowBigUp } from 'react-icons/lu';

const images = [
  '/images/1.svg',
  '/images/2.svg',
  '/images/3.svg',
  '/images/4.svg',
  '/images/5.svg',
  '/images/6.svg',
  '/images/7.svg',
];
const CoctailsHome = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center space-y-20 bg-gray-800 py-10 before:absolute before:inset-0 before:z-[1] before:bg-black/20"
      style={{
        backgroundImage: `url('/images/123.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="z-[2] mt-20 rounded-xl bg-amber-300/50 px-10 py-2 text-5xl">
        You ready to get nicely buzzed today, fam?
      </h1>
      <ul className="z-[2] mt-10 flex justify-center space-x-6">
        {images.map((img, index) => (
          <li key={index}>
            <img
              src={img}
              alt={`Drink image number ${index + 1}`}
              className="w-[120px] transition hover:scale-[1.07]"
            />
          </li>
        ))}
      </ul>
      <LuArrowBigUp size={90} className="absolute top-[-30px] left-[640px]" />
    </div>
  );
};

export default CoctailsHome;
