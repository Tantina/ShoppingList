import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PurchaseForm from './PurchaseForm';

const { object } = PropTypes;

class PurchaseItem extends Component {
  static propTypes = {
    item: object.isRequired,
    actions: object.isRequired
  }

  state = {
    editable: false,
  }

  onModeEdit = () => {
    this.setState({
      editable: true,
    });
  }

  onModeSave = () => {
    this.setState({
      editable: false,
    });
  }

  render() {
    const { item, actions } = this.props;
    const { editable } = this.state;

    return (
      <li className="purchase-list__item">
        {
          editable
            ? <PurchaseForm item={item} actions={actions} editMode onModeSave={this.onModeSave} />
            : <div className="purchase-list__data">
              <span className="purchase-list__data__field purchase-list__data__field--name">{item.name}</span>
              <span className="purchase-list__data__field purchase-list__data__field--desc">{item.description}</span>
              <span className="purchase-list__data__field purchase-list__data__field--number">{item.count}</span>
              <button
                type="button"
                className="button-default button--edit-item"
                onClick={() => this.onModeEdit()}
              >
                Edit
              </button>
              <button
                type="button"
                className="button--remove-item"
                onClick={() => actions.removeItem(item.id)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
        }
      </li>
    );
  }
}

export default PurchaseItem;
