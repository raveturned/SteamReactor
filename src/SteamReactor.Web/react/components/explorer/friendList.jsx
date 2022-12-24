import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Friend from './friend';

const useStyles = makeStyles((theme) => ({
  listUsers: {
    display: 'block',
    passing: theme.spacing(1),
    width: 240,
    overflowY: 'auto',
  },
}));

const FriendList = ({
  friendIds, selectedUsers, byId, toggleSelect,
}) => {
  const classes = useStyles();
  return (
    <List className={classes.listUsers} dense>
      {friendIds.map((id) => {
        const user = byId[id];
        return (
          <ListItem
            button
            onClick={() => toggleSelect(id)}
            key={id}
            selected={selectedUsers.includes(id)}
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
  toggleSelect: PropTypes.func.isRequired,
  friendIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  byId: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default FriendList;
