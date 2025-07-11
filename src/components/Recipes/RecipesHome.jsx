import { Link, Outlet, Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from '../Container/Container';
import Category from './Category';

const HelloSection = lazy(() => import('./HelloSection'));
const FoodApp = lazy(() => import('./FoodApp'));
const Instruction = lazy(() => import('./Instruction'));
const RecipeDetails = lazy(() => import('./RecipeDetails'));

const style =
  'px-8 py-2 rounded-2xl flex justify-center items-center transition border-t-2 border-b-2 text-gray-800 bg-transparent hover:bg-gray-400/60';
const styleActive = 'text-amber-500 shadow-[0px_0px_10px_10px_rgba(0,0,0,0.5)]';

const RecipesHome = () => {
  return (
    <Container>
      <div
        className="min-h-screen bg-gray-900/90"
        style={{
          backgroundImage: `url('/images/food-1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <header className="flex flex-row items-center justify-start gap-10 border-b-2 bg-gray-300/60 p-3">
          <Link to="/">
            <img
              src="/public/images/burger.png"
              alt=""
              className="ml-4 w-[50px]"
            />
          </Link>
          <ul className="flex flex-row items-center justify-start gap-30 pl-30 text-xl text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${style} ${isActive ? styleActive : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipeshome/recipes"
                className={({ isActive }) =>
                  `${style} ${isActive ? styleActive : ''}`
                }
              >
                Recipes
              </NavLink>
            </li>
          </ul>
        </header>
        <section className="p-6">
          <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
              <Route index element={<HelloSection />} />
              <Route path="recipes" element={<FoodApp />} />
              <Route path="recipes/:recipeId" element={<RecipeDetails />}>
                <Route path="instruction" element={<Instruction />} />
                <Route path="category/:categoryId" element={<Category />} />
              </Route>
            </Routes>
            {/* <Outlet /> */}
          </Suspense>
        </section>
      </div>
    </Container>
  );
};

export default RecipesHome;
