import React, { Component } from "react";
import "./FilmsTable.css";

class FilmsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmData: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/films/")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ filmData: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    console.log(this.state.filmData);
    return (
      <div className="FilmsTable">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Episode</th>
              <th>Release Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filmData.map((data, index) => (
              <tr key={index} film={data}>
                <td>{data.title}</td>
                <td>{data.episode_id}</td>
                <td>{data.release_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default FilmsTable;
