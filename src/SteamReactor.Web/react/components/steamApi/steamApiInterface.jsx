import React from 'react';
import PropTypes from 'prop-types';
import SteamApiMethod from './steamApiMethod';
import styles from './styles.css';

const SteamApiInterface = props => (
    <div className={styles.apiInterface}>
        {props.name}
        <ul>
            {props.methods.map(m => (
                <SteamApiMethod
                    key={`${props.name} ${m.name} ${m.version}`}
                    name={m.name}
                    interfaceName={props.name}
                    version={m.version}
                    parameters={m.parameters}
                    httpMethod={m.httpmethod}
                />))}
        </ul>
    </div>
);

SteamApiInterface.propTypes = {
    name: PropTypes.string.isRequired,
    methods: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        version: PropTypes.number.isRequired,
    })).isRequired,
};

export default SteamApiInterface;
