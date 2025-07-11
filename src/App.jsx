import React, { Suspense, lazy, useEffect } from 'react';
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/Recipes/HomePage';
import RecipesHome from './components/Recipes/RecipesHome';
import HelloSection from './components/Recipes/HelloSection';
import FoodApp from './components/Recipes/FoodApp';
import RecipeDetails from './components/Recipes/RecipeDetails';
import Instruction from './components/Recipes/Instruction';
import Category from './components/Recipes/Category';

const baseNavLinkClasses =
  'px-2 py-1 text-white hover:bg-gray-700 rounded transition-colors duration-200';
const activeNavLinkClasses = 'bg-amber-800 text-yellow-300 font-bold';

const getNavLinkClass = ({ isActive }) =>
  `${baseNavLinkClasses} ${isActive ? activeNavLinkClasses : ''}`;

const Module1 = lazy(() => import('./components/DZ1/Module1'));
const Module2 = lazy(() => import('./components/DZ2/Module2'));
const Quiz = lazy(() => import('./components/DZ2/kahoot/Quiz'));
const Module3 = lazy(() => import('./components/DZ3/Module3/Module3'));
const Module4 = lazy(() => import('./components/DZ4/Module4/Module4'));
const Module6 = lazy(() => import('./components/DZ6/Module6/Module6'));
const Grid = lazy(() => import('./components/Grid/Grid'));
const MemoryGame = lazy(() => import('./components/DZ4/MemoryGame/MemoryGame'));
const DZApp = lazy(() => import('./components/DZ4/DZ/DZApp/DZApp'));
const Rock = lazy(() => import('./components/DZ1/Rock/Rock'));
const Module5 = lazy(() => import('./components/DZ5/Module5/Module5'));
const CoctailsMain = lazy(() => import('./components/Coctails/CoctailsMain'));
const RecipesApp = lazy(() => import('./components/Recipes/RecipesApp'));
const CoctailsHome = lazy(() => import('./components/Coctails/CoctailsHome'));
const CoctailsApp = lazy(() => import('./components/Coctails/CoctailsApp'));
const SearchApp = lazy(() => import('./components/Coctails/SearchApp'));
const CoctailDetails = lazy(
  () => import('./components/Coctails/CoctailDetails'),
);
const CoctailsNotFound = lazy(
  () => import('./components/Coctails/CoctailsNotFound'),
);

function App() {
  const location = useLocation();

  useEffect(() => {
    const tabMap = {
      '/quiz': 0,
      '/coctails': 1,
      '/recipes': 2,
      '/grid': 3,
      '/memorygame': 4,
      '/searchimg-tw': 5,
      '/rock': 6,
      '/react1': 7,
      '/react2': 8,
      '/react3': 9,
      '/react4': 10,
      '/react5': 11,
      '/react6': 12,
    };
    const currentTab = tabMap[location.pathname] || 0;
    localStorage.setItem('activeTab', currentTab);
  }, [location]);

  return (
    <>
      <nav className="flex flex-row items-center justify-center gap-2 border-b-4 border-black bg-gray-900 p-2 text-lg">
        <NavLink to="/quiz" className={getNavLinkClass}>
          Quiz
        </NavLink>
        <NavLink to="/coctailshome" className={getNavLinkClass}>
          Coctails
        </NavLink>
        <NavLink to="/recipeshome" className={getNavLinkClass}>
          Recipes
        </NavLink>
        <NavLink to="/grid" className={getNavLinkClass}>
          Grid
        </NavLink>
        <NavLink to="/memorygame" className={getNavLinkClass}>
          MemoryGame
        </NavLink>
        <NavLink to="/searchimg-tw" className={getNavLinkClass}>
          SearchImg_TW
        </NavLink>
        <NavLink to="/rock" className={getNavLinkClass}>
          Rock
        </NavLink>
        <NavLink to="/react1" className={getNavLinkClass}>
          React 1
        </NavLink>
        <NavLink to="/react2" className={getNavLinkClass}>
          React 2
        </NavLink>
        <NavLink to="/react3" className={getNavLinkClass}>
          React 3
        </NavLink>
        <NavLink to="/react4" className={getNavLinkClass}>
          React 4
        </NavLink>
        <NavLink to="/react5" className={getNavLinkClass}>
          React 5
        </NavLink>
        <NavLink to="/react6" className={getNavLinkClass}>
          React 6
        </NavLink>
      </nav>

      <Suspense
        fallback={<div className="text-center text-white">Loading...</div>}
      >
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/coctailshome" element={<CoctailsMain />}>
            <Route index element={<CoctailsHome />} />
            <Route path="coctails" element={<CoctailsApp />} />
            <Route path="coctails/:coctailsId" element={<CoctailDetails />} />
            <Route path="search" element={<SearchApp />} />
            <Route path="*" element={<CoctailsNotFound />} />
          </Route>
          <Route path="/recipeshome" element={<HomePage />} />
          <Route path="/recipeshome/home" element={<RecipesHome />}>
            <Route index element={<HelloSection />} />
            <Route path="recipes" element={<FoodApp />} />
            <Route path="recipes/:recipeId" element={<RecipeDetails />}>
              <Route path="instruction" element={<Instruction />} />
              <Route path="category/:categoryId" element={<Category />} />
            </Route>
          </Route>
          <Route path="/grid" element={<Grid />} />
          <Route path="/memorygame" element={<MemoryGame />} />
          <Route path="/searchimg-tw" element={<DZApp />} />
          <Route path="/rock" element={<Rock />} />
          <Route path="/react1" element={<Module1 />} />
          <Route path="/react2" element={<Module2 />} />
          <Route path="/react3" element={<Module3 />} />
          <Route path="/react4" element={<Module4 />} />
          <Route path="/react5" element={<Module5 />} />
          <Route path="/react6" element={<Module6 />} />
          <Route path="/" element={<Quiz />} /> {/* Дефолтна сторінка */}
        </Routes>
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <img
        className="absolute top-1 left-0"
        src="/images/Urban-4.png"
        alt="Urban"
        width="120"
      />
    </>
  );
}

export default App;
