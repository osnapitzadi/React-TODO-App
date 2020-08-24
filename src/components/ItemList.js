import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';
import { BsFillTrashFill, BsCheckBox } from "react-icons/bs";

export default class ItemList  extends Component {
    render () {
        console.log(this);
        if (this.props.done) {
            // ListGroupProps.variant = 'success'
        }
        return (
            <ListGroup.Item
                className='d-flex justify-content-around align-items-center'
                variant={this.props.done ? 'success' : 'warning'}
                ><p className="flex-grow-1 m-0">{this.props.content}</p>
                    <span onClick={this.props.doneHandler}>
                        <BsCheckBox 
                        className='mx-3'
                        />
                    </span>
                    <span onClick={this.props.deleteHandler}>
                        <BsFillTrashFill 
                        />
                    </span>
            </ListGroup.Item>
        )
    }
    

}