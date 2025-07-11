import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { RiTailwindCssFill } from "react-icons/ri";
import { lazy, Suspense } from "react";
import NotFound from "../LMS/NotFound";
import Container from "../../Container/Container";
const Users = lazy(() => import("../LMS/Users"));
const Posts = lazy(() => import("../LMS/Posts"));
const UsersDetails = lazy(() => import("../LMS/UsersDetails"));
const Mission = lazy(() => import("../LMS/Mission"));
const Team = lazy(() => import("../Team"));
const Reviews = lazy(() => import("../LMS/Reviews"));
const AdvantagesDetails = lazy(() => import("../LMS/AdvantagesDetails"));
const Home = lazy(() => import("../LMS/Home"));
const About = lazy(() => import("../LMS/About"));
const Advantages = lazy(() => import("../LMS/Advantages"));

const style =
  "px-10 py-3  bg-gray-600 text-white rounded-3xl hover:bg-gray-700 border-b-3 border-t-3 transition";
const styleActive = "shadow-[0_0_20px_rgba(255,255,255,0.7)]";
const Module5 = () => {
  return (
    <Container>
      <header className="py-6 relative flex flex-row justify-between px-12 bg-gray-500">
        <p className="text-black text-4xl flex flex-row justify-center items-center">
          <span role="img" aria-label="computer icon">
            💻
          </span>
          React Router
        </p>
        <nav className="flex flex-row gap-7 justify-center items-center">
          <NavLink
            className={({ isActive }) =>
              `${style} ${isActive ? styleActive : ""}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${style} ${isActive ? styleActive : ""}`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${style} ${isActive ? styleActive : ""}`
            }
            to="/products"
          >
            Advantages
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `${style} ${isActive ? styleActive : ""}`
            }
          >
            Users
          </NavLink>
        </nav>
        <RiTailwindCssFill
          className="absolute top-5 right-[-70px]"
          size={50}
          color="blue"
        />
      </header>
      <Suspense fallback={<h2>Data is loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Advantages />} />
          <Route path="/products/:productId" element={<AdvantagesDetails />} />
          <Route path="/customers" element={<Navigate to="/users" />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UsersDetails />}>
            <Route path="posts" element={<Posts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default Module5;
