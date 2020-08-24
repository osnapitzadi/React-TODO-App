import React, { Component } from 'react';


export default class TodoList extends Component {
    render () {
        return (
            <div>
                <ul>
                {this.state.items.map(item => (
                    <li key={item.id}>{item.content}</li>
                ))}
                </ul>
            </div>
        );
    };

}