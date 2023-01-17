import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Chip } from '@mui/material';

const Friend = ({ user, selected, toggleSelect }) => {
  const userLabel = user.name || '';
  const userTitle = user.name || user.id;
  return (
    <Chip
      avatar={(
        <Avatar
          src={user.avatar}
          alt={userTitle}
          title={userTitle}
          sx={{ width: 32, height: 32 }}
        />
      )}
      label={userLabel}
      variant={selected ? 'default' : 'outlined'}
      onClick={() => toggleSelect(user.id)}
    />
  );
};

Friend.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  selected: PropTypes.bool.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};

Friend.defaultProps = {
};

export default Friend;
