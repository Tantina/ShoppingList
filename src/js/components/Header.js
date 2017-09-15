import React from 'react';
import PropTypes from 'prop-types';

const { number, func } = PropTypes;

const Header = (props) => {
  const { count, removeAll } = props;
  return (
    <header className="header">
      <h1>Shopping List</h1>
      { count > 0 &&
        <button
          className="button--remove-all"
          onClick={removeAll}
        >
          Remove all
        </button>
      }
    </header>
  );
};

Header.propTypes = {
  count: number.isRequired,
  removeAll: func.isRequired,
};

export default Header;
