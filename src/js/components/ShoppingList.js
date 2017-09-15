import React from 'react';
import PropTypes from 'prop-types';

import PurchaseList from '../components/PurchaseList';

const { array, object } = PropTypes;

const ShoppingList = (props) => {
  const { items, actions } = props;
  const itemsCount = items.length;
  return (
    <div>
      <PurchaseList items={items} actions={actions} />
      <p className="counter">{itemsCount} {itemsCount === 1 ? 'item' : 'items'} left</p>
    </div>
  );
};

ShoppingList.propTypes = {
  items: array.isRequired,
  actions: object.isRequired
};

export default ShoppingList;
