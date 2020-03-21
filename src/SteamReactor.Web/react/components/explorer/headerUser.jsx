import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const HeaderUser = (props) => {
  const detail = props.user.hasDetail ? (
    <div className={styles.headerUser}>
      <img src={props.user.avatarMedium} alt={props.user.name} title={props.user.name} />
    </div>
  ) : (
    <div className={styles.headerUser}>
      {`Id: ${props.user.id}`}
      <br />
      {`HasDetail: ${props.user.hasDetail}`}
    </div>
  );
  return detail;
};

HeaderUser.propTypes = {
  user: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    hasDetail: PropTypes.bool.isRequired,
  })).isRequired,
};

export default HeaderUser;
