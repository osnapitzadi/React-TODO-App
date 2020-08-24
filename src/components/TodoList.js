import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';
import { BsFillTrashFill } from "react-icons/bs";

export default class TodoList extends Component {
    render () {
        return (
            <ListGroup>
                    {this.props.items.map(item => {
                            return (
                                <ListGroup.Item
                                    className='d-flex justify-content-between align-items-center'
                                    variant='warning'
                                    key={item.id}
                                    // id={item.id}
                                    // onClick={this.props.doneHandler}
                                    >
                                        {item.content}
                                        <BsFillTrashFill 
                                        className='mx-2'
                                        // onClick={this.props.deleteHandler}
                                        />
                                </ListGroup.Item>
                            )
                        }
                    )   
                }

                {/* <ul>
                {this.props.items.map(item => (
                    <li 
                    key={item.id}
                    >{item.content}</li>
                ))}
                </ul> */}
            </ListGroup>
        );
    };

}