import React, { Component } from "react";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { Container, Button } from 'react-bootstrap';
import TodoList from "./components/TodoList";




class App extends Component {
  state = {
      items: [
        {
          id: 11,
          content: 'first todo',
          done: false
        },
        {
          id: 22,
          content: 'second todo',
          done: true
        }
      ],
      id: undefined,
      content: "",
      done: false
  };

    
  inputHandler = (event) => {    
    this.setState({
      content: event.target.value
    })
    
  };

  addTodo = (event) => {
    event.preventDefault();

    if (this.state.content.length === 0) {
      return;
    }

    const newItem = {
      content: this.state.content,
      id: Date.now(),
      done: false
    };
    
    const newItems = [...this.state.items];
    newItems.push(newItem);

    this.setState({
      items: newItems,
      content: ''  
    });
  }

  doneHandler = id => {
    console.log(id);
    let newItems = [...this.state.items];
    let newItem = newItems.find(item => item.id === id);
    newItem.done = !newItem.done;
    console.log(newItem);
    this.setState({
      items: newItems
    })
  }
  
  deleteHandler = id => {
    let newItems = [...this.state.items];
    newItems = newItems.filter(item => item.id !== id);
    this.setState({
      items: newItems
    });
  }

  deleteAll = () => {
    this.setState({
      items: []
    });
  }

  render () {
    return (
      <Container>
        <Header></Header>
        <div className='d-flex justify-content-center'>
          <input className='m-3' onChange={this.inputHandler} value={this.state.content}></input>
          <Button variant="outline-light" className='btn-sm m-3' onClick={this.addTodo}>Add TODO</Button>
        </div>
        <TodoList 
          items={this.state.items} 
          deleteHandler={this.deleteHandler}
          doneHandler={this.doneHandler}
          ></TodoList>
          <div className='flex justify-content-center m-3'>
            <Button variant='danger' className='flex justify-content-center m-3' onClick={this.deleteAll}>Delete All</Button>
          </div>
      </Container>
    )
  }

}


export default App