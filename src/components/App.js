import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderBall: false,
      position: 0,
    };

    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buttonClickHandler() {
    this.setState({
      renderBall: true,
    });
  }

  handleKeyDown(event) {
    if (event.keyCode === 39) {
      this.setState((prevState) => ({
        position: prevState.position + 5,
      }));
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return (
        <div
          className="ball"
          style={{
            position: "relative",
            left: `${this.state.position}px`,
          }}
        ></div>
      );
    }

    return (
      <button
        className="start"
        onClick={this.buttonClickHandler}
      >
        Start
      </button>
    );
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    );
  }
}

export default App;