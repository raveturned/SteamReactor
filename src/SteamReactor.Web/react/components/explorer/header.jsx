import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Toolbar } from '@mui/material';

import CurrentUser from './currentUser';

const Header = ({
  currentUser,
  children,
}) => (
  <>
    <AppBar
      position="fixed"
    >
      <Toolbar>
        <CurrentUser
          user={currentUser}
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
  currentUser: PropTypes.shape({
    id: PropTypes.string,
    avatarMedium: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Header;
