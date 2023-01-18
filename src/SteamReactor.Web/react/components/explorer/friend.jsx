import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import UserAvatar from './userAvatar';

const FlexDiv = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const Friend = ({ user, selected, toggleSelect }) => {
  const userLabel = user.name || 'Loading...';
  return (
    <Card
      sx={{
        width: 260, m: 1,
      }}
      raised={selected}
      // variant="normal"
    >
      <CardActionArea onClick={() => toggleSelect(user.id)}>
        <CardContent>
          <FlexDiv>
            <UserAvatar user={user} />
            <Typography sx={{ px: 1 }}>
              {userLabel}
            </Typography>
          </FlexDiv>
        </CardContent>
      </CardActionArea>
    </Card>
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
