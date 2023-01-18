import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import UserAvatar from './userAvatar';

const Root = styled('div')(() => ({
  display: 'flex',
}));

const CurrentUser = ({ user }) => {
  const displayName = user.name ?? 'Loading...';
  return (
    <Root>
      <UserAvatar user={user} />
      <Typography sx={{ padding: 1.5 }}>{displayName}</Typography>
    </Root>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    avatarMedium: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default CurrentUser;
