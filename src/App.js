import React, { Component } from "react";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { Container, Button } from 'react-bootstrap';
// import TodoList from "./components/TodoList";




class App extends Component {
  state = {
    items: [
      {
        id: 11,
        content: 'first todo',
        done: false
      }
    ],
    id: '',
    content: "",
    done: false
  };
    
  inputHandler = (event) => {

    console.log(this.state.content);
    
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



  render () {
    return (
      <Container>
        <Header></Header>
        <input className='m-3' onChange={this.inputHandler}></input>
        <Button variant="outline-light" onClick={this.addTodo}>Add TODO</Button>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ul>
      </Container>
    )
  }

}


export default App