import MoviesGrid from "./components/MoviesGrid";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-8">
      <div className="col-span-2 hidden lg:block">
        <Navbar />
      </div>
      <div className="col-span-7">
        <MoviesGrid />
      </div>
      <div className="col-span-3 hidden xl:block">
        <h1>hiii</h1>
      </div>
    </div>
  );
};

export default App;
