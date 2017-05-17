import React from 'react';
import { Item } from './item.js';

const ListItem = ({ items, deleteItem }) => {
  return (
    <div className='list-items'>
      { items.map((item) => <Item key={item.id} {...item} deleteItem={deleteItem} />) }
    </div>
  );
};

export default ListItem
