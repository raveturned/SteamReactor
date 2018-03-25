import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Steam from '../../../api/steam';
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
        this.props.fetchInterfaces();
    }

    render() {
        const interfaces = ((this.props.interfaces.length > 0) ?
            this.props.interfaces.map(i => (<SteamApiInterface
                key={i.name}
                name={i.name}
                methods={i.methods}
            />)) :
            <div>Please wait...</div>);
        return (
            <div className={styles.apiList}>
                {interfaces}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    interfaces: state.apiList.interfaces,
});

const mapDispatchToProps = dispatch => ({
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
