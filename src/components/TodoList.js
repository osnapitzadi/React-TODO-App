import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';
import ItemList from './ItemList'

export default class TodoList extends Component {
    render () {
        return (
            <ListGroup className='mx-5'>
                {this.props.items.map(item => {
                    return (
                        <ItemList
                            key={item.id}
                            // deleteHandler={this.props.deleteHandler}
                            content={item.content}
                            done={item.done}
                            deleteHandler={() => this.props.deleteHandler(item.id)}
                            doneHandler={() => this.props.doneHandler(item.id)}
                        ></ItemList>
                    )
                })}
            </ListGroup>
        );
    };

}