import React from "react";
import axios from "axios";
import Display from "./Display";

export default class DataFetch extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        console.log(response.data);
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        {this.state.data.map((item, key) => {
          return (
            <Display
              name={item.name}
              country={item.country}
              searches={item.searches}
              id={item.id}
              key={key}
            />
          );
        })}
      </div>
    );
  }
}

