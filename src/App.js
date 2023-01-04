import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import FullPizza from './pages/FullPizza';
import MainLayout from './layouts/MainLayout';

// import pizzas from './assets/pizza.json';
// export const SearchContext = React.createContext();

function App() {
  // const [searchValue, setSearchValue] = React.useState('');

  return (
    // // <div className="wrapper">
    //   {/* <SearchContext.Provider value={{ searchValue, setSearchValue }}> */}
    //   // <Header />
    //   // <div className="content">
    // <MainLayout>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    //  </MainLayout>
    //   // </div>
    //   {/* </SearchContext.Provider> */}
    // {/* </div> */}
  );
}

export default App;
