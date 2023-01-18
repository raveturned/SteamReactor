import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Toolbar } from '@mui/material';
import Party from './party';

import CurrentUser from './currentUser';

const Header = ({
  currentUser,
  partyMembers,
  children,
}) => (
  <>
    <AppBar
      position="fixed"
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <CurrentUser
          user={currentUser}
        />
        <Party
          partyMembers={partyMembers}
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
  partyMembers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    avatarMedium: PropTypes.string,
    name: PropTypes.string,
  }).isRequired).isRequired,
  children: PropTypes.node.isRequired,
};

export default Header;
