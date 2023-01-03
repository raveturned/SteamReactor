import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Root = styled('div')(() => ({
  display: 'flex',
}));

const CurrentUser = ({ user }) => (
  <Root>
    <Avatar
      src={user.avatarMedium}
      alt={user.name}
      title={user.name}
      sx={{ width: 48, height: 48 }}
    />
    <Typography sx={{ padding: 1.5 }}>{user.hasDetail ? user.name : user.id}</Typography>
  </Root>
);

CurrentUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    hasDetail: PropTypes.bool.isRequired,
    avatarMedium: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default CurrentUser;
