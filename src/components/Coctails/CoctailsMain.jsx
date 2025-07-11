import { lazy, Suspense } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { RiTailwindCssFill } from 'react-icons/ri';
import CoctailsNotFound from './CoctailsNotFound';
import Container from '../Container/Container';
import SearchApp from './SearchApp';

const CoctailsHome = lazy(() => import('./CoctailsHome'));
const CoctailDetails = lazy(() => import('./CoctailDetails'));
const CoctailsApp = lazy(() => import('./CoctailsApp'));

const CoctailsMain = () => {
  return (
    <Container>
      <header className="relative flex flex-row items-center justify-center space-x-8 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-500 py-5">
        <NavLink
          to="/"
          className="cursor-pointer rounded-lg border-2 border-transparent bg-gradient-to-t from-amber-200 via-amber-400 to-amber-500 px-5 py-2 text-xl text-black transition hover:border-black hover:bg-amber-500"
        >
          Home
        </NavLink>
        <NavLink
          to="/coctails"
          className="cursor-pointer rounded-lg border-2 border-transparent bg-gradient-to-t from-amber-200 via-amber-400 to-amber-500 px-5 py-2 text-xl text-black transition hover:border-black hover:bg-amber-500"
        >
          What we will drink today? Click HERE
        </NavLink>
        <NavLink
          to="/search"
          className="cursor-pointer rounded-lg border-2 border-transparent bg-gradient-to-t from-amber-200 via-amber-400 to-amber-500 px-5 py-2 text-xl text-black transition hover:border-black hover:bg-amber-500"
        >
          Search drink
        </NavLink>
        <RiTailwindCssFill
          className="absolute top-4 right-0"
          size={50}
          color="blue"
        />
        <Link to="/">
          <img
            src="/public/images/coctail-svg.svg"
            alt="Icon-coctail"
            className="absolute top-2 left-3"
            width="70"
          />
        </Link>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<CoctailsHome />} />
          <Route path="/coctails" element={<CoctailsApp />} />
          <Route path="/search" element={<SearchApp />} />
          <Route path="/coctails/:coctailId" element={<CoctailDetails />} />
          <Route path="*" element={<CoctailsNotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default CoctailsMain;
