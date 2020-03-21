import React from 'react';
import PropTypes from 'prop-types';
import CurrentUser from './currentUser';
import HeaderUser from './headerUser';
import styles from './styles.css';

const UsersHeader = ({ byId, currentUserId, ids }) => (
    <div className={styles.header}>
        <CurrentUser
            user={byId[currentUserId]}
        />
        <div className={styles.usersHeader}>
            {ids
                .filter((id) => (id !== currentUserId))
                .map((id) => {
                    const user = byId[id];
                    return (
                        <HeaderUser
                            id={id}
                            user={user}
                        />
                    );
                })}
        </div>
    </div>
);

UsersHeader.propTypes = {
    currentUserId: PropTypes.number.isRequired,
    ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    byId: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default UsersHeader;
