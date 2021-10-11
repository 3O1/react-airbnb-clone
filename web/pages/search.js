import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guestNumber } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guestNumber}`} />

      <main className="flex"></main>
      <section className="flex-grow px-6 pt-10">
        <p className="text-xs">
          300+ stays · {range} · for {guestNumber} guests
        </p>
        <h1 className="mt-2 mb-6 text-2xl font-semibackdrop-blur-md">
          Stays in {location}
        </h1>

        <div className="hidden mb-5 space-x-3 text-gray-800 md:inline-flex whitespace-nowrap">
          <p className="filterButton">Cancellation Flexibility</p>
          <p className="filterButton">Type of Place</p>
          <p className="filterButton">Price</p>
          <p className="filterButton">Rooms and beds</p>
          <p className="filterButton">More filters</p>
        </div>

        <div className="flex flex-col">
          {searchResults.map(
            ({ img, location, title, description, star, price, total }) => (
              <InfoCard
                img={img}
                location={location}
                title={title}
                key={img}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            )
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
