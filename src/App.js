import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/nav";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar
          counters={this.state.counters.filter((c) => c.value !== 0).length}
        />
        <Counters
          counters={this.state.counters}
          onIncreament={this.handeIncreament}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onDecrease={this.handleDecrease}
          onLiked={this.handleLiked}
        />
      </React.Fragment>
    );
  }
  state = {
    counters: [
      {
        id: 1,
        value: 3,
        liked: true,
      },
      {
        id: 2,
        value: 0,
        liked: false,
      },
      {
        id: 3,
        value: 0,
        liked: false,
      },
      {
        id: 4,
        value: 0,
        liked: false,
      },
    ],
  };

  handleDelete = (counter) => {
    const counters = [...this.state.counters];

    const filtered = counters.filter((c) => {
      return c.id !== counter;
    });
    this.setState({ counters: filtered });
  };

  handleReset = () => {
    const counters = [...this.state.counters];
    counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handeIncreament = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // counter is assigned to aviod this.state to be changed directly
    // state should be changed without using setState
    counters[index] = { ...counter };
    counters[index].value += 1;
    this.setState({ counters });
  };

  handleDecrease = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value -= 1;
    this.setState({ counters });
  };

  handleLiked = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].liked
      ? (counters[index].liked = false)
      : (counters[index].liked = true);
    this.setState({ counters });
  };
}

export default App;
