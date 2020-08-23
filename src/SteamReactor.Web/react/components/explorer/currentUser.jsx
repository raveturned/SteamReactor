import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
    minWidth: 184,
  },
  large: {
    width: 184,
    height: 184,
  },
}));

const CurrentUser = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Avatar
        src={user.avatarFull}
        alt={user.name}
        title={user.name}
        variant="rounded"
        className={classes.large}
      />
      <Typography>{user.hasDetail ? user.name : user.id}</Typography>
    </Card>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    hasDetail: PropTypes.bool.isRequired,
    avatarFull: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default CurrentUser;
