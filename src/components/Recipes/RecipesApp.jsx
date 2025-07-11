import { Link, Routes, Route } from 'react-router-dom';
import Container from '../Container/Container';
import { lazy, Suspense } from 'react';
// import HomePage from './HomePage';
// import RecipesHome from "./RecipesHome";
const RecipesHome = lazy(() => import('./RecipesHome'));
const HomePage = lazy(() => import('./HomePage'));
const RecipesApp = () => {
  return (
    <div>
      <main>
        <Container>
          {/* Вміст визначається роутами, хедер більше не тут */}
        </Container>
      </main>
      <Suspense fallback={<h2>Loading page...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipeshome/*" element={<RecipesHome />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default RecipesApp;
