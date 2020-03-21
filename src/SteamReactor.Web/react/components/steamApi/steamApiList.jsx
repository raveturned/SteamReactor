import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SteamApiInterface from './steamApiInterface';
import styles from './styles.css';
import { fetchInterfaces } from '../../../redux/actions/steamApi';

class SteamApiList extends React.Component {
  /*
    constructor(props) {
        super(props);
        this.state = { interfaces: [] };
    }
    */

  componentDidMount() {
    const { fetchInterfaces: getInterfaces } = this.props;
    getInterfaces();
  }

  render() {
    const { interfaces } = this.props;
    const renderInterfaces = ((interfaces.length > 0)
      ? interfaces.map((i) => (
        <SteamApiInterface
          key={i.name}
          name={i.name}
          methods={i.methods}
        />
      ))
      : <div>Please wait...</div>);
    return (
      <div className={styles.apiList}>
        {renderInterfaces}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  interfaces: state.apiList.interfaces,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInterfaces: () => dispatch(fetchInterfaces()),
});

SteamApiList.propTypes = {
  interfaces: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    methods: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      version: PropTypes.number.isRequired,
    })).isRequired,
  })).isRequired,
  fetchInterfaces: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SteamApiList);
