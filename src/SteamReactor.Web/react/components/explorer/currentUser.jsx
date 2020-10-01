import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  image: {
    width: 48,
    height: 48,
  },
  name: {
    padding: theme.spacing(1.5),
  },
}));

const CurrentUser = ({ user }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        src={user.avatarMedium}
        alt={user.name}
        title={user.name}
        // variant="rounded"
        className={classes.image}
      />
      <Typography className={classes.name}>{user.hasDetail ? user.name : user.id}</Typography>
    </div>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    hasDetail: PropTypes.bool.isRequired,
    avatarMedium: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default CurrentUser;
