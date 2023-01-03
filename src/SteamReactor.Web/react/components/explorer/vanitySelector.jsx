import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField } from '@mui/material';

const VanitySelector = ({ handleVanityChange, submitVanity, vanity }) => (
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
      onClick={submitVanity}
      sx={{ margin: 1 }}
    >
      Fetch
    </Button>
  </Box>
);

VanitySelector.defaultProps = {
  vanity: '',
};

VanitySelector.propTypes = {
  handleVanityChange: PropTypes.func.isRequired,
  submitVanity: PropTypes.func.isRequired,
  vanity: PropTypes.string,
};

export default VanitySelector;
