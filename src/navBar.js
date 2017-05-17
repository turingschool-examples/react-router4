import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
      <NavLink to='/create-idea' activeClassName='selected'>Create Idea</NavLink>
      <NavLink to='/ideas' activeClassName='selected'>All Ideas</NavLink>
      <NavLink to='/thoughts' activeClassName='selected'>All Thoughts</NavLink>
      <NavLink to='/create-thought' activeClassName='selected'>Create Thought</NavLink>
    </div>
  );
}
