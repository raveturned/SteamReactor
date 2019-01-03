import React from 'react';
import PropTypes from 'prop-types';
import CurrentUser from './currentUser';
import HeaderUser from './headerUser';
import styles from './styles.css';

const UsersHeader = props => (
    <div className={styles.header}>
        <CurrentUser
            user={props.byId[props.currentUserId]}
        />
        <div className={styles.usersHeader}>
            {props.ids
                .filter(id => (id !== props.currentUserId))
                .map((id) => {
                    const user = props.byId[id];
                    return (
                        <HeaderUser
                            id={id}
                            user={user}
                        />
                    );
                })
            }
        </div>
    </div>
);

UsersHeader.propTypes = {
    currentUserId: PropTypes.number.isRequired,
    ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    byId: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default UsersHeader;
