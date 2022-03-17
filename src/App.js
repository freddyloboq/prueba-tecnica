import { useState, useEffect } from "react";
import "./App.css";
import Tatooine from "./img/file.jpg";

function App() {
  const [people, setPeople] = useState([]);
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => setPeople(data));

    fetch("https://swapi.dev/api/planets/1")
      .then((res) => res.json())
      .then((data) => setPlanet(data));
  }, []);

  return (
    <>
      <h1 id="title">StarWar</h1>
      <div className="container">
        <p className="subTitle">
          Este es el planeta de{" "}
          <span className="fontStrong">{people.name}</span>
        </p>
        <div className="card">
        <div className="container-text">
        <div>
          <h4>Nombre del planeta: {planet.name}</h4>
          <p>Diametro del planeta: {planet.diameter}</p>
          <p>Orbita del planeta: {planet.orbital_period}</p>
          <p>Población del planeta: {planet.population}</p>
        </div>
            <img src={Tatooine} alt="" className="imagen" />
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
