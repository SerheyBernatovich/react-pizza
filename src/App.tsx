import Loadable from 'react-loadable';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';

import Home from './pages/Home';
// import Cart from './pages/Cart';
// import NotFound from './pages/NotFound';
// import FullPizza from './pages/FullPizza';
import MainLayout from './layouts/MainLayout';

// код сплітінг на стороні сервера і клієнта
const Cart = Loadable({
  loader: () => import(/*webpackChunkName:'Cart' */ './pages/Cart'),
  loading: () => <div>Loading the cart...</div>,
});
// код сплітінг на стороні клієнта
const FullPizza = React.lazy(
  () => import(/*webpackChunkName:'FullPizza' */ './pages/FullPizza')
);
const NotFound = React.lazy(
  () => import(/*webpackChunkName:'NotFound' */ './pages/NotFound')
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <React.Suspense fallback={<div>Loading the cart...</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <React.Suspense fallback={<div>Loading ...</div>}>
              <FullPizza />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<div>Loading the cart...</div>}>
              <NotFound />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
