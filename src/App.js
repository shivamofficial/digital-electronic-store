import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './allComponents/Header';
import Home from './allComponents/Home';
import UserList from './allComponents/UserList';
import UserProfile from './allComponents/UserProfile';
import LaptopStock from './allComponents/LaptopStock';
import MobileStock from './allComponents/MobileStock';
import ShopPage from './allComponents/ShopPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/user-profile/:userId" element={<UserProfile />} />
          <Route path="/shop-page" element={<ShopPage />} />
          <Route path="/laptop-stock" element={<LaptopStock />} />
          <Route path="/mobile-stock" element={<MobileStock />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;