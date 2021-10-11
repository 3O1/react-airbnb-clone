import Header from '../components/Header';
import Footer from '../components/Footer';

function Search() {
  return (
    <div>
      <Header />

      <main className="flex"></main>
      <section>
        <p className="text-xs">300+ stays for 5 number of guests</p>
        <h1 className="mt-2 mb-6 text-2xl font-semibackdrop-blur-md">
          Stays in Mars
        </h1>

        <div className="hidden md:inline-flex">
          <p className="filterButton">Cancellation Flexibility</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Search;
