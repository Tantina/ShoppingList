import React from 'react';
import PropTypes from 'prop-types';
import PurchaseItem from './PurchaseItem';

const { array, object } = PropTypes;

const PurchaseList = (props) => {
  const { items, actions } = props;
  return (
    <ul className="purchase-list">
      {items.map(item =>
        (<PurchaseItem
          key={item.id}
          item={item}
          actions={actions}
        />)
      )}
    </ul>
  );
};

PurchaseList.propTypes = {
  items: array.isRequired,
  actions: object.isRequired
};

export default PurchaseList;
