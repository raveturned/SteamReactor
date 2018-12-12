import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const HeaderUser = props => (
    <div className={styles.headerUser}>
        {`Id: ${props.user.id}`}
        <br />
        {`HasDetail: ${props.user.hasDetail}`}
    </div>
);

HeaderUser.propTypes = {
    // key: PropTypes.number.isRequired,
    user: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        hasDetail: PropTypes.bool.isRequired,
    })).isRequired,
};

export default HeaderUser;
