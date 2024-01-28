import React, { Component } from 'react';
import _ from 'underscore';
import ClientActions from '../actions/ClientActions';
import ClientStore from '../stores/ClientStore';
import RoomComponent from './RoomComponent';

export default class ClientComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { rooms: ClientStore.rooms() };
        this.onChangeRooms = this.onChangeRooms.bind(this);
    }

    componentDidMount() {
        ClientStore.addChangeRoomsListener(this.onChangeRooms);

        ClientActions.initWebSocket();
    }

    componentWillUnmount() {
        ClientStore.removeChangeRoomsListener(this.onChangeRooms);
    }

    onChangeRooms() {
        this.setState({ rooms: ClientStore.rooms() });
    }

    render() {
        return (
            <div className="component--client">
                {
                    _.map(this.state.rooms, (room) => {
                        return <RoomComponent key={room._id} roomId={room._id} people={room.people} />
                    })
                }
            </div>
        );
    }

}
