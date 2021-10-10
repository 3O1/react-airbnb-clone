import Image from "next/image";

function Header() {
  /** Use header tag for SEO & google */
  return (
    <header>
      <h1>I am the header</h1>

      {/* left section */}
      <div>
        {/* use Next.js img tag compresses & optimized
         * needs to know dimensions to compress
         * to prepare next.js images -> whitelist domains
         */}
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
        ></Image>
      </div>

      {/* middle section */}
      <div></div>

      {/* right section */}
      <div></div>
    </header>
  );
}

export default Header;
