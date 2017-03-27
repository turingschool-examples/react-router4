import React from 'react';
import { Link } from 'react-router-dom';

export const ListItem = ({ title, body, id, match }) => {
  return (
    <div className='list-item'>
      <Link to={`/${match.url.split('/')[1]}/${id}`}><h1>{title}</h1></Link>
      <p>{body}</p>
    </div>
  );
};
