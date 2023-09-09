import Books from "./Books/Books.tsx";
import Filters from "./Filters/Filters.tsx";

const Home = () => {
  return (
    <main className="grid grid-cols-1 justify-center lg:grid-cols-4 xl:grid-cols-5 mx-auto px-4">
      <section className="w-70 mb-4 bg-primary rounded shadow-md lg:sticky lg:top-16 lg:h-[80vh]">
        <Filters />
      </section>
      <section className="md:col-span-3 xl:col-span-4 flex flex-col md:flex-center md:items-center">
        <Books />
      </section>
    </main>
  );
};

export default Home;
