import React from 'react';
import Steam from '../../../api/steam';
import SteamApiInterface from './steamApiInterface';

class SteamApiList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { interfaces: [] };
    }

    componentDidMount() {
        const result = Steam.getSupportedAPIList();
        result.then((data) => { this.onMount(data.apilist.interfaces); });
    }

    onMount(interfaces) {
        this.setState({ interfaces });
    }

    render() {
        return (
            <div className="apiList">
                {this.state.interfaces.map(i => (<SteamApiInterface
                    key={i.name}
                    name={i.name}
                    methods={i.methods}
                />))}
            </div>
        );
    }
}

export default SteamApiList;
