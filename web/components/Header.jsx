import Image from 'next/image';
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

function Header() {
  /** Have to tell React to update the value */
  const [searchInput, setSearchInput] = useState('');

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [guestNumber, setGuestNumber] = useState('1');

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  /** Resets searchbar input */
  const resetInput = () => {
    setSearchInput('');
  };

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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#fd5b61']}
            onChange={handleSelect}
          />

          <div className="flex items-center mb-4 border-b">
            <h2 className="flex-grow text-xl font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              value={guestNumber}
              onChange={(e) => setGuestNumber(e.target.value)}
              className="w-12 pl-2 text-lg text-red-400 outline-none"
              type="number"
              min={1}
            />
          </div>
          <div>
            <div className="flex ">
              <button onClick={resetInput} className="flex-grow text-gray-500">
                Cancel
              </button>
              <button className="flex-grow text-red-400">Save</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
