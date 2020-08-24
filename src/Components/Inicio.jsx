import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import imagotipo from "../img/imagotipo.jpg";
import "./Inicio.css";

const Inicio = () => {
  return (
    <Fragment>
      <div className="container-custom">
        <div className="logo">
        <img className="imagotipo" alt="imagotipo" src={imagotipo} />
        <h6>Programa de capacitación y apoyo para trabajar prevención y autocuidado en niños y niñas durante la contingencia COVID-19</h6>
        <div>
        <div>
          <Link to="/Adulto"><Button  title="Adulto" /></Link>
        </div>
        <div>
          <Link to="/Niños"><Button className="button" title="Niños" /></Link>
        </div>
      </div>
    </div>
  </div>
</Fragment>
  )
}

export default Inicio