import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ title, body, id, deleteItem }) => {
  return (
    <div className='list-item'>
      <Link to={`/ideas/${id}`}><h1>{title}</h1></Link>
      <p>{body}</p>
      <button onClick={() => deleteItem(id) }>Delete</button>
    </div>
  );
};
