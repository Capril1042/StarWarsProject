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
        <table className="FilmsTable__Table">
          <thead className="FilmsTable__Header">
            <tr>
              <th className="FilmsHeader__label">Title</th>
              <th className="FilmsHeader__label">Episode</th>
              <th className="FilmsHeader__label">Release Date</th>
            </tr>
          </thead>
          <tbody className="FilmsRow">
            {this.state.filmData.map((data, index) => (
              <tr key={index} film={data}>
                <td className="FilmsRow__item">{data.title}</td>
                <td className="FilmsRow__item">{data.episode_id}</td>
                <td className="FilmsRow__item">{data.release_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default FilmsTable;
