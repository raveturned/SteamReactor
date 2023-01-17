import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Toolbar } from '@mui/material';

import CurrentUser from './currentUser';

const Header = ({
  playerSummaries,
  currentUserId,
  children,
}) => (
  <>
    <AppBar
      position="fixed"
    >
      <Toolbar>
        <CurrentUser
          user={playerSummaries[currentUserId] || {}}
        />
      </Toolbar>
    </AppBar>
    <Box>
      <Toolbar />
      {children}
    </Box>
  </>
);

Header.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  playerSummaries: PropTypes.objectOf(PropTypes.shape()).isRequired,
  children: PropTypes.node.isRequired,
};

export default Header;
