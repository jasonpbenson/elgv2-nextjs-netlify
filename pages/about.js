import React, { Component } from "react";
import content from "../content/about.md";

export default class About extends Component {
  render() {
    let {
      attributes: { title, cats }
    } = content;
    // console.log(content);
    return (
      <article>
        <h1>{title}</h1>
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    );
  }
}
