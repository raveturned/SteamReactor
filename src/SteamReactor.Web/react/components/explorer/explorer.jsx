import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
        console.log(`A vanity URL was submitted: ${this.state.vanity}`);
        this.props.fetchVanity(this.state.vanity);
    }

    render() {
        const { userId } = this.props;
        const { users } = this.props;
        const { apps } = this.props;
        const userDetails = (!userId || userId < 0)
            ? (
                <div>
                    {'Enter vanity URL: '}
                    <input value={this.state.vanity} onChange={this.handleVanityChange} />
                    <button type="button" onClick={this.submitVanity}>Fetch</button>
                </div>
            )
            : (
                <div>
                    <UsersHeader
                        currentUserId={userId}
                        ids={users.ids}
                        byId={users.byId}
                    />
                    <AppList apps={apps} />
                </div>
            );
        return (userDetails);
    }
}

const mapStateToProps = state => ({
    apps: [], // state.explorer.allAppNames,
    userId: state.explorer.userId,
    users: state.explorer.users,
});

const mapDispatchToProps = dispatch => ({
    fetchVanity: (steamId) => {
        dispatch(fetchVanity(steamId));
        dispatch(fetchAppList());
    },
});

Explorer.propTypes = {
    apps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    userId: PropTypes.number.isRequired,
    users: PropTypes.objectOf(PropTypes.shape({
        ids: PropTypes.arrayOf(PropTypes.number).isRequired,
        byId: PropTypes.object.isRequired,
    })).isRequired,
    fetchVanity: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
