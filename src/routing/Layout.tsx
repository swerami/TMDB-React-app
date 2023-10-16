import { Outlet } from "react-router-dom";
import MoviesGrid from "../components/MoviesGrid";
import RightSidebarGrid from "../components/RightSidebarGrid";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import useMovies from "../hooks/useMovies";
import usePopular from "../hooks/usePopular";

const Layout = () => {
  // const { data: GenreData } = useGenres();
  const { data: MovieData } = useMovies();
  const { data: TopRateData } = usePopular();

  return (
    <div className="grid grid-cols-12 gap-x-4 py-4 px-2">
      <div className="col-span-2 hidden xl:block">
        <Sidebar />
      </div>
      <div className="col-span-12 max-w-[100vw] md:col-span-7">
        {/* <Navbar genres={GenreData} /> */}
        <Outlet />
      </div>
      <div className="flex-col gap-4 md:col-span-5 xl:col-span-3 hidden md:flex">
        <Search />
        <RightSidebarGrid />
      </div>
    </div>
  );
};

export default Layout;
