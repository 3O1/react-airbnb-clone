import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex px-2 pr-2 border-b cursor-pointer py-7 first:border-t">
      <div className="relative flex-shrink-0 w-40 h-24 md:h-52 md:w-80">
        <Image
          className="rounded-md sm:rounded-lg"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="text-sm text-gray-700 md:text-md">{location}</p>
          <HeartIcon className="h-5 text-gray-500 cursor-pointer" />
        </div>

        <h4 className="text-lg md:text-xl">{title}</h4>
        <div className="pt-2 border-b " />

        <p className="flex-grow pt-2 text-xs text-gray-500 sm:text-sm">
          {description}
        </p>

        {/* right info */}
        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="font-semibold text-md sm:text-lg md:text-xl">
              {price}
            </p>
            <p className="text-sm font-light text-right text-gray-500 ">
              {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
