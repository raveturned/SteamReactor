import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import CurrentUser from './currentUser';

const Header = ({ internalClass, byId, currentUserId }) => (
  <AppBar position="fixed" className={internalClass}>
    <Toolbar>
      <CurrentUser
        user={byId[currentUserId]}
      />
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  internalClass: PropTypes.string.isRequired,
  currentUserId: PropTypes.string.isRequired,
  byId: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default Header;
