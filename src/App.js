import React from 'react';
import Header from './components/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className="App">
      <div className="wrapper">
      
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home searchValue={searchValue}/>} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
