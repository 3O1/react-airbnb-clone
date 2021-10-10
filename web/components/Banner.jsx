import Image from 'next/image';

function Banner() {
  /**
   * when using `relative` have to specify width
   *
   * if parent is relative -> container of absolute acts like page when positioning
   * - if parent is not relative -> will position on the entire page
   */
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560"
        alt="banner"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute w-full text-center top-1/2">
        <p className="text-sm sm:text-lg">Not sure where to go?</p>

        <button className="px-10 py-3 my-3 font-bold text-purple-500 transition duration-150 bg-white rounded-full shadow-md active:scale-90 hover:shadow-xl">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
