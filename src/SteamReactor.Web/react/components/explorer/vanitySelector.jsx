import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, TextField, Typography,
} from '@mui/material';
// import { styled } from '@mui/material/styles';

const VanitySelector = ({ submitVanity }) => {
  const [vanity, setVanity] = useState('');

  const handleVanityChange = (event) => {
    setVanity(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography>
        Who are you?
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TextField
          label="Vanity URL"
          value={vanity}
          onChange={handleVanityChange}
          onKeyDown={({ key }) => {
            if (key === 'Enter') {
              submitVanity(vanity);
            }
          }}
          sx={{ margin: 1 }}
        />
        <Button
          variant="contained"
          onClick={() => submitVanity(vanity)}
          sx={{ margin: 1 }}
        >
          Fetch
        </Button>
      </Box>
    </Box>
  );
};

VanitySelector.propTypes = {
  submitVanity: PropTypes.func.isRequired,
};

export default VanitySelector;
