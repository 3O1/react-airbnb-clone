import Image from 'next/image';
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from '@heroicons/react/solid';

function Header() {
  /** Use header tag for SEO & google */
  return (
    /**
     * breakpoints - mobile first
     */
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white border-b border-gray-200 shadow-sm md:px-10">
      {/* left section */}

      {/* relative - relative to container
       */}
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        {/* use Next.js img tag compresses & optimized
         * needs to know dimensions to compress
         * to prepare next.js images -> whitelist domains
         */}
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        ></Image>
      </div>

      {/* middle section
       * flex-grow: use for one element to push one as it grows
       */}
      <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 text-gray-600 placeholder-gray-400 bg-transparent outline-none text-small"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden h-8 p-1 mx-auto text-white bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2" />
      </div>

      {/* right section
       *
       */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer"></GlobeAltIcon>

        <div className="flex items-center p-2 space-x-2 border-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
