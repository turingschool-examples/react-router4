import React from 'react';

export const ListItem = ({ title, body, id }) => {
  return (
    <div className='list-item'>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};
