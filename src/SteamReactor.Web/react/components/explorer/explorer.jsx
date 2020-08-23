import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { fetchVanity, fetchAppList } from '../../../redux/actions/steamApi';
import UsersHeader from './usersHeader';
import AppList from './appList';

class Explorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vanity: '' };
    this.handleVanityChange = this.handleVanityChange.bind(this);
    this.submitVanity = this.submitVanity.bind(this);
  }

  handleVanityChange(event) {
    this.setState({ vanity: event.target.value });
  }

  submitVanity() {
    const { vanity } = this.state;
    const { callFetchVanity } = this.props;
    console.log(`A vanity URL was submitted: ${vanity}`);
    callFetchVanity(vanity);
  }

  render() {
    const { apps, userId, users } = this.props;
    const { vanity } = this.state;
    return (!userId || userId < 0)
      ? (
        <>
          <TextField label="Vanity URL" value={vanity} onChange={this.handleVanityChange} />
          <Button variant="contained" color="primary" onClick={this.submitVanity}>Fetch</Button>
        </>
      )
      : (
        <>
          <UsersHeader
            currentUserId={userId}
            ids={users.ids}
            byId={users.byId}
          />
          <AppList apps={apps} />
        </>
      );
  }
}

const mapStateToProps = (state) => ({
  apps: [], // state.explorer.allAppNames,
  userId: state.explorer.userId,
  users: state.explorer.users,
});

const mapDispatchToProps = (dispatch) => ({
  callFetchVanity: (steamId) => {
    dispatch(fetchVanity(steamId));
    dispatch(fetchAppList());
  },
});

Explorer.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  userId: PropTypes.string.isRequired,
  users: PropTypes.shape({
    ids: PropTypes.arrayOf(PropTypes.string).isRequired,
    byId: PropTypes.objectOf(PropTypes.shape()).isRequired,
  }).isRequired,
  callFetchVanity: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
