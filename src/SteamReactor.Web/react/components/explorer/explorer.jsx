import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchVanity } from '../../../redux/actions/steamApi';
import UsersHeader from './usersHeader';

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
                    {`User Id is: ${userId}`}
                    <UsersHeader
                        ids={users.ids}
                        byId={users.byId}
                    />
                </div>
            );
        return (userDetails);
    }
}

const mapStateToProps = state => ({
    userId: state.explorer.userId,
    users: state.explorer.users,
});

const mapDispatchToProps = dispatch => ({
    fetchVanity: steamId => dispatch(fetchVanity(steamId)),
});

Explorer.propTypes = {
    userId: PropTypes.number.isRequired,
    users: PropTypes.objectOf(PropTypes.shape({
        ids: PropTypes.arrayOf(PropTypes.long).isRequired,
        byId: PropTypes.object.isRequired,
    })).isRequired,
    fetchVanity: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
