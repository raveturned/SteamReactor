import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Friend from './friend';

const useStyles = makeStyles((theme) => ({
  headerUsers: {
    display: 'block',
    passing: theme.spacing(1),
    width: 192,
  },
}));

const onClick = ((id) => { alert(id); });

const FriendList = ({ friendIds, byId }) => {
  const classes = useStyles();
  return (
    <List className={classes.headerUsers} dense>
      {friendIds.map((id) => {
        const user = byId[id];
        return (
          <ListItem
            button
            onClick={() => onClick(id)}
            key={id}
          >
            <Friend
              key={id}
              id={id}
              user={user}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friendIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  byId: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default FriendList;
