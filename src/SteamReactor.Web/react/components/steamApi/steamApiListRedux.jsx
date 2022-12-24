import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SteamApiInterface from './steamApiInterface';
import styles from './styles.css';
import { fetchInterfaces as apiFetchInterfaces } from '../../../redux/actions/steamApi';

const SteamApiListRedux = ({
  interfaces,
  fetchInterfaces,
}) => {
  useEffect(() => {
    fetchInterfaces();
  }, [fetchInterfaces]);

  return (
    <div className={styles.apiList}>
      {
        (interfaces.length > 0)
          ? interfaces.map((i) => (
            <SteamApiInterface
              key={i.name}
              name={i.name}
              methods={i.methods}
            />
          ))
          : <div>Please wait...</div>
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  interfaces: state.apiList.interfaces,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInterfaces: () => dispatch(apiFetchInterfaces()),
});

SteamApiListRedux.propTypes = {
  interfaces: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    methods: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      version: PropTypes.number.isRequired,
    })).isRequired,
  })).isRequired,
  fetchInterfaces: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SteamApiListRedux);
