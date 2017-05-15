import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink activeClassName='selected' to='/create-idea'>Create Idea!!</NavLink>
      <NavLink activeClassName='selected' to='/home'>HOME!!</NavLink>
      <NavLink activeClassName='selected' to='/ideas'>IDEAS!!</NavLink>
    </div>
  );
}
