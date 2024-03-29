import Image from 'next/image';

function MediumCard({ img, title }) {
  return (
    <div className="transition duration-300 ease-out transform cursor-pointer ">
      <div className="relative h-80 w-80">
        <Image className="rounded-xl" src={img} layout="fill"></Image>
      </div>
      <h3 className="mt-3 text-xl sm:text-2xl">{title}</h3>
    </div>
  );
}

export default MediumCard;
