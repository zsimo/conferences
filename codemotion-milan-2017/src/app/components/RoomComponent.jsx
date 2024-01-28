import React, { Component } from 'react';

export default class RoomComponent extends Component {

    static get propTypes() {
        return {
            roomId: React.PropTypes.string.isRequired,
            people: React.PropTypes.string.isRequired,
        };
    }

    render() {
        return (
            <div className="component--room">
                <div className="vertical-align-middle">
                    <div className="title">Room { this.props.roomId }</div>
                    <div className="people">
                        <span className="label">N&deg;</span>
                        <span className="number">{ this.props.people }</span>
                    </div>
                </div>
            </div>
        );
    }

}
