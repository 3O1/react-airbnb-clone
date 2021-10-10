import Image from 'next/image';

function Header() {
  /** Use header tag for SEO & google */
  return (
    /**
     * breakpoints - mobile first
     */
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-sm p-5 md:px-10 border-b border-gray-200">
      {/* left section */}

      {/* relative - relative to container
       */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
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

      {/* middle section */}
      <div>
        <input type="text" />
      </div>

      {/* right section */}
      <div></div>
    </header>
  );
}

export default Header;
