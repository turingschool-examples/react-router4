import React from 'react';
import { Link } from 'react-router-dom';

export const ListItem = ({ title, body, id }) => {
  return (
    <div className='list-item'>
      <Link to={`/ideas/${id}`}><h1>{title}</h1></Link>
      <p>{body}</p>
    </div>
  );
};
