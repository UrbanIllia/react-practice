import { Link, Outlet, NavLink } from 'react-router-dom';

import Container from '../Container/Container';

const style =
  'px-8 py-2 rounded-2xl flex justify-center items-center transition border-t-2 border-b-2 text-gray-800 bg-transparent hover:bg-gray-400/60';
const styleActive = 'text-amber-500 shadow-[0px_0px_10px_10px_rgba(0,0,0,0.5)]';

const RecipesHome = () => {
  return (
    <Container>
      <div
      // className="min-h-screen bg-gray-900/90"
      >
        <header className="flex flex-row items-center justify-start gap-10 border-b-2 bg-gradient-to-b from-gray-900 to-gray-300/60 p-3">
          <Link to="/recipeshome">
            <img src="/images/burger.png" alt="" className="ml-4 w-[50px]" />
          </Link>
          <ul className="flex flex-row items-center justify-start gap-30 pl-30 text-xl text-white">
            <li>
              <NavLink
                to="/recipeshome/home"
                className={({ isActive }) =>
                  `${style} ${isActive ? styleActive : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipeshome/home/recipes"
                className={({ isActive }) =>
                  `${style} ${isActive ? styleActive : ''}`
                }
              >
                Recipes
              </NavLink>
            </li>
          </ul>
        </header>
        <section className="">
          <Outlet />
        </section>
      </div>
    </Container>
  );
};

export default RecipesHome;
