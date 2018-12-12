import React from 'react';
import PropTypes from 'prop-types';
import HeaderUser from './headerUser';
import styles from './styles.css';

const UsersHeader = props => (
    <div className={styles.usersHeader}>
        {props.ids.map((id) => {
            const user = props.byId[id];
            return (
                <HeaderUser
                    id={id}
                    user={user}
                />
            );
        })}
    </div>
);

UsersHeader.propTypes = {
    ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    byId: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default UsersHeader;
