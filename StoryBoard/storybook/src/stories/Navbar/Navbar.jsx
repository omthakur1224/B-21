import React from 'react';
import PropTypes from 'prop-types';


/**
 * Primary UI component for user interaction
 */
export const Navbar = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-Navbar--primary' : 'storybook-Navbar--secondary';
  return (
    <Navbar
      type="Navbar"
      className={['storybook-Navbar', `storybook-Navbar--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </Navbar>
  );
};

Navbar.propTypes = {
  
};

Navbar.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
