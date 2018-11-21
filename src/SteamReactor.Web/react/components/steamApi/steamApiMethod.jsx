import React from 'react';
import PropTypes from 'prop-types';

const SteamApiMethod = (props) => {
    const params = props.parameters.map((p) => {
        let result = `${p.type} ${p.name}`;
        if (p.optional) {
            result = `[${result}]`;
        }
        return result;
    }).join(', ');
    return (
        <li>
            {props.httpMethod}
            { 'http://api.steampowered.com/' }
            {props.interfaceName}
            { '/'}
            {props.name}
            { '/v000' }
            {props.version}
            { '(' }
            {params}
            { ')' }
        </li>
    );
};

SteamApiMethod.propTypes = {
    interfaceName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    version: PropTypes.number.isRequired,
    httpMethod: PropTypes.string.isRequired,
    parameters: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        optional: PropTypes.bool.isRequired,
    })).isRequired,
};

export default SteamApiMethod;
