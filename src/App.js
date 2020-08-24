import React, { Component } from "react";
import Header from "./components/Header";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      done: '',
      content: '',
    };
  }

  render () {
    return (
      <div>
        <Header></Header>
      </div>
    )
  }

}


export default App