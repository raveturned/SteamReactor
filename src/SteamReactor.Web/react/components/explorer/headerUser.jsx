import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-block',
  },
}));

const HeaderUser = ({ user }) => {
  const classes = useStyles();
  const userLabel = user.name || user.id;
  return (
    <Card className={classes.root}>
      <Chip
        avatar={(
          <Avatar
            src={user.avatar}
            alt={userLabel}
            title={userLabel}
            variant="rounded"
          />
        )}
        label={userLabel}
      />
    </Card>
  );
};

HeaderUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    hasDetail: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default HeaderUser;
