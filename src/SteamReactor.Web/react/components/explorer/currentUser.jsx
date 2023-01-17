import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Root = styled('div')(() => ({
  display: 'flex',
}));

const CurrentUser = ({ user }) => {
  const displayName = user.name ?? 'Loading...';
  return (
    <Root>
      <Avatar
        src={user.avatarMedium}
        alt={displayName}
        title={displayName}
        sx={{ width: 48, height: 48 }}
      />
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
