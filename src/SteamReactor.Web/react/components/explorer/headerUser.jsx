import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
  },
  medium: {
    width: 64,
    height: 64,
  },
}));

const HeaderUser = ({ user }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Avatar
        src={user.avatarMedium}
        alt={user.name || user.id}
        title={user.name || user.id}
        variant="rounded"
        className={classes.medium}
      />
    </Card>
  );
};

HeaderUser.propTypes = {
  user: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    hasDetail: PropTypes.bool.isRequired,
  })).isRequired,
};

export default HeaderUser;
