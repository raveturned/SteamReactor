import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import LockIcon from '@mui/icons-material/Lock';

const UserAvatar = ({ user }) => {
  const displayName = user.name ?? 'Loading...';
  return (
    (user.visibilityState && user.visibilityState.name !== 'Public')
      ? (
        <Badge
          key={user.id}
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={(
            <LockIcon
              alt={user.visibilityState.name}
            />
          )}
        >
          <Avatar
            key={user.id}
            src={user.avatarMedium}
            alt={displayName}
            title={displayName}
            sx={{ width: 48, height: 48 }}
          />
        </Badge>
      )
      : (
        <Avatar
          key={user.id}
          src={user.avatarMedium}
          alt={displayName}
          title={displayName}
          sx={{ width: 48, height: 48 }}
        />
      )
  );
};

UserAvatar.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    avatarMedium: PropTypes.string,
    name: PropTypes.string,
    visibilityState: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default UserAvatar;
