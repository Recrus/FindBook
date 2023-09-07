import Books from "../Books/Books.tsx";
import Filters from "../../components/Filters/Filters.tsx";

const Home = () => {
  return (
    <main className="grid grid-cols-5 mx-auto px-4 pt-6">
      <section className="col-span-4">
        <Books />
      </section>
      <section className="h-[80vh] bg-primary rounded shadow-md sticky top-16 right-11 w-80">
        <Filters />
      </section>
    </main>
  );
};

export default Home;
