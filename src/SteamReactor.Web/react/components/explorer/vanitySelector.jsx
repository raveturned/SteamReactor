import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  vanitySelector: {
    padding: '1rem',
    display: 'flex',
  },
}));

const VanitySelector = ({ handleVanityChange, submitVanity, vanity }) => {
  const classes = useStyles();
  return (
    <div className={classes.vanitySelector}>
      <TextField label="Vanity URL" value={vanity} onChange={handleVanityChange} />
      <Button variant="contained" color="primary" onClick={submitVanity}>Fetch</Button>
    </div>
  );
};

VanitySelector.defaultProps = {
  vanity: '',
};

VanitySelector.propTypes = {
  handleVanityChange: PropTypes.func.isRequired,
  submitVanity: PropTypes.func.isRequired,
  vanity: PropTypes.string,
};

export default VanitySelector;
