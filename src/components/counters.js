import React, { Component } from "react";
import "../App.css";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onDelete, onIncreament, onReset, onDecrease, onLiked } =
      this.props;

    if (counters.length === 0) return <p>No Counter Available</p>;
    return (
      <div className="container">
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncreament={onIncreament}
              onDecrease={onDecrease}
              onLiked={onLiked}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
