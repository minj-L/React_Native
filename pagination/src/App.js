import React from "react";
import Navigator from "./components/navigator/Navigator";
import Home from "../src/components/Home";
import Page from "./components/pagination/Page";

//실습 1
export default function App() {
  const title = 'Welcom to the new blog';
  const likes = 50;
  const person = { name: 'minjj', age: 30};
  const link = "http://www.google.com"

  return (
    <div className="App">
      <Navigator />
      <div className="content">
        <Home />
        <h1>{title}</h1>
        <p>Liked { likes } times</p>

        <p>{ 10 }</p>
        <p>{ "hello, ninjas" }</p>
        <p>{person.name}{person.age}</p>
        <p>{person.name} {person.age}</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
};