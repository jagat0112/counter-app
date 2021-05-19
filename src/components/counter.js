import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncreament, onDelete, onLiked } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.changeClassCounter()}>
            {this.showCounterValue()}
          </span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary"
            onClick={() => {
              onIncreament(counter);
            }}
          >
            +
          </button>
          <button
            className="btn btn-secondary m-2"
            onClick={() => {
              this.props.onDecrease(counter);
            }}
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>

          <button
            className="btn btn-danger btn-sm "
            onClick={() => {
              onDelete(counter.id);
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <span className="btn btn-heart" onClick={() => onLiked(counter)}>
            <i className={this.heartIcon()}></i>
          </span>
        </div>
      </div>
    );
  }

  heartIcon() {
    if (this.props.counter.liked) {
      return "fas fa-heart";
    }
    return "far fa-heart";
  }
  showCounterValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  changeClassCounter = () => {
    let classCounter = "badge m-4 badge-";
    if (this.props.counter.value === 0) classCounter += "warning";
    else classCounter += "primary";
    return classCounter;
  };
}

export default Counter;
