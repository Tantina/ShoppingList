import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ItemActions from '../actions';

import Header from '../components/Header';
import PurchaseForm from '../components/PurchaseForm';
import ShoppingList from '../components/ShoppingList';

const { array, object } = PropTypes;

const MainContainer = ({ items, actions }) => (
  <div className="content">
    <Header count={items.length} removeAll={actions.removeAll} />
    <div className="container">
      <PurchaseForm actions={actions} />
      <ShoppingList
        items={items}
        actions={actions}
      />
    </div>
  </div>
);

MainContainer.propTypes = {
  items: array.isRequired,
  actions: object.isRequired
};

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ItemActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContainer);
