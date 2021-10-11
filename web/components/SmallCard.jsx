import Image from 'next/image';

/**
 * props can be passed in any component
 */

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 transition duration-200 ease-out transform cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105">
      {/* left side */}
      <div className="relative w-16 h-16">
        <Image className="rounded-lg" src={img} layout="fill" />
      </div>

      {/* right side */}
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
