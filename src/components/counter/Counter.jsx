import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  IncreaseCounter() {
    // console.log(this.setState());

    this.setState((per) => {
      return { counter: per.counter + 1 };
    });
  }
  DecreaseCounter() {
    // console.log("remove");

    this.setState((per) => {
      return { counter: per.counter <= 0 ? 0 : per.counter - 1};
    });
  }
  render() {
    return (
      <div className="container">
        <div className="counter-container">
          <div className="counter-text">
            <h1 className="counter-text__title">counter</h1>
            <h4 className="counter-text__desc">{this.state.counter}</h4>
          </div>
          <div className="counter-btns">
            <div className="counter-btns__btn-increase">
              <button onClick={() => this.IncreaseCounter()} className="btn">
                Increase
              </button>
            </div>
            <div className="counter-btns__btn-decrease">
              <button onClick={() => this.DecreaseCounter()} className="btn">
                decrease
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
