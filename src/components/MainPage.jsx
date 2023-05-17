import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainPage = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainPage;