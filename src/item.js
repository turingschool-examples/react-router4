import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ title, body, id, deleteItem }) => {
  return (
    <div className='list-item'>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={() => deleteItem(id) }>Delete</button>
    </div>
  );
};
