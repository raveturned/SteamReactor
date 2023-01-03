import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@mui/material';

import CurrentUser from './currentUser';

const Header = ({ byId, currentUserId }) => (
  <AppBar
    position="fixed"
  >
    <Toolbar>
      <CurrentUser
        user={byId[currentUserId]}
      />
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  byId: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default Header;
