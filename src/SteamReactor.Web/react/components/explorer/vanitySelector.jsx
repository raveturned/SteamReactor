import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField } from '@mui/material';

const VanitySelector = ({ submitVanity }) => {
  const [vanity, setVanity] = useState('');

  const handleVanityChange = (event) => {
    setVanity(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <TextField
        label="Vanity URL"
        value={vanity}
        onChange={handleVanityChange}
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
  );
};

VanitySelector.propTypes = {
  submitVanity: PropTypes.func.isRequired,
};

export default VanitySelector;
