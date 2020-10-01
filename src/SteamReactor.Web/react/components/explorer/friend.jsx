import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  avatar: {
    height: 32,
    width: 32,
  },
  label: {
    padding: theme.spacing(0.5),
  },
}));

const Friend = ({ user, hideLabel }) => {
  const classes = useStyles();
  const userLabel = user.name || user.id;
  return (
    <>
      <ListItemAvatar>
        <Avatar
          src={user.avatar}
          alt={userLabel}
          title={userLabel}
          // variant="rounded"
          className={classes.avatar}
        />
      </ListItemAvatar>
      {!hideLabel && <ListItemText primary={userLabel} /> }
    </>
  );
};

Friend.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    hasDetail: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  hideLabel: PropTypes.bool,
};

Friend.defaultProps = {
  hideLabel: false,
};

export default Friend;
