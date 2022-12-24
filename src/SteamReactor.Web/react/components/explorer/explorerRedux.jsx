import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { fetchVanity, fetchAppList, selectFriend } from '../../../redux/actions/steamApi';
import Header from './header';
import Main from './main';
import VanitySelector from './vanitySelector';

const styles = (theme) => ({
  header: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

class ExplorerRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vanity: '',
    };
    this.handleVanityChange = this.handleVanityChange.bind(this);
    this.submitVanity = this.submitVanity.bind(this);
  }

  handleVanityChange(event) {
    this.setState({ vanity: event.target.value });
  }

  submitVanity() {
    const { vanity } = this.state;
    const { callFetchVanity } = this.props;
    callFetchVanity(vanity);
  }

  render() {
    const {
      classes,
      apps,
      userId,
      users,
      selectedUsers,
      toggleFriendSelect,
    } = this.props;
    const {
      vanity,
    } = this.state;
    return (!userId || userId < 0)
      ? (
        <VanitySelector
          handleVanityChange={this.handleVanityChange}
          submitVanity={this.submitVanity}
          vanity={vanity}
        />
      )
      : (
        <>
          <Header
            internalClass={classes.header}
            currentUserId={userId}
            byId={users.byId}
          />
          <Main
            apps={apps}
            byId={users.byId}
            friendIds={users.ids.filter((id) => (id !== userId))}
            selectedUsers={selectedUsers}
            toggleFriendSelect={toggleFriendSelect}
          />
        </>
      );
  }
}

const mapStateToProps = (state) => ({
  apps: [],
  userId: state.explorer.userId,
  users: state.explorer.users,
  selectedUsers: state.explorer.selectedUsers,
});

const mapDispatchToProps = (dispatch) => ({
  callFetchVanity: (steamId) => {
    dispatch(fetchVanity(steamId));
    dispatch(fetchAppList());
  },
  toggleFriendSelect: (steamId) => {
    dispatch(selectFriend(steamId));
  },
});

ExplorerRedux.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  userId: PropTypes.string.isRequired,
  users: PropTypes.shape({
    ids: PropTypes.arrayOf(PropTypes.string).isRequired,
    byId: PropTypes.objectOf(PropTypes.shape()).isRequired,
  }).isRequired,
  selectedUsers: PropTypes.arrayOf(PropTypes.string).isRequired,
  callFetchVanity: PropTypes.func.isRequired,
  toggleFriendSelect: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    header: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ExplorerRedux));
