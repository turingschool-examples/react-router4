import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink to='/' activeClassName='selected'>Home</NavLink>
      <NavLink to='/create-idea' activeClassName='selected'>Create Idea</NavLink>
      <NavLink to='/ideas' activeClassName='selected'>All Ideas</NavLink>
    </div>
  );
}
