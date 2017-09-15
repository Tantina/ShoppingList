import React, { Component } from 'react';
import PropTypes from 'prop-types';

const { object, bool, func } = PropTypes;

const initialState = {
  name: '',
  description: '',
  count: 1
};

class PurchaseForm extends Component {
  static propTypes = {
    item: object,
    actions: object.isRequired,
    editMode: bool,
    onModeSave: func
  }

  state = this.props.editMode ? this.props.item : initialState;

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, description, count, id } = this.state;
    const { actions, editMode, onModeSave } = this.props;
    const item = { name, description, count };

    if (this.validationItem()) {
      if (editMode) {
        actions.editItem({ ...item, id });
        onModeSave();
      } else {
        actions.addItem(item);
      }
      this.setState(initialState);
    }
  }

  handleChangeInput = key => (event) => {
    this.setState({
      [key]: event.currentTarget.value
    });
  }

  validationItem = () => {
    const { name, count } = this.state;
    return !!name && count > 0;
  }

  render() {
    const { editMode } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="purchase-form">
        <input
          type="text"
          className="purchase-form__input purchase-form__input--name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChangeInput('name')}
        />
        <input
          type="text"
          className="purchase-form__input purchase-form__input--desc"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleChangeInput('description')}
        />
        <input
          type="number"
          className="purchase-form__input purchase-form__input--number"
          placeholder="Count"
          value={this.state.count}
          onChange={this.handleChangeInput('count')}
        />
        <button type="submit" className="button-default button--add-item">
          {editMode ? 'Save' : 'Add'}
        </button>
      </form>
    );
  }
}

PurchaseForm.defaultProps = {
  item: {},
  editMode: false,
  onModeSave: null
};

export default PurchaseForm;
