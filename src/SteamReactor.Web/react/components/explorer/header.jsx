import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@mui/material';

import CurrentUser from './currentUser';

const Header = ({ playerSummaries, currentUserId }) => (
  <AppBar
    position="fixed"
  >
    <Toolbar>
      <CurrentUser
        user={playerSummaries[currentUserId] || {}}
      />
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  playerSummaries: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default Header;
