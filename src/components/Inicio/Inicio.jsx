import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { Animated } from "react-animated-css";
import style from "../Inicio/Inicio.module.css";
import useThemeSwitcher from '../../hooks/useThemeSwitcher'

const Inicio = () => {
   const ThemeSwitcher = useThemeSwitcher();
  return (
    <Fragment>
      <div className={style.container}>
        {ThemeSwitcher}
        <div>
          <Logo />
          <div>
            <Animated
              animationIn="zoomInDown"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div className={style.hFather}>
                <h2 className={style.hS}>Ganémosle al virus</h2>
              </div>
            </Animated>
            <div className={style.pFather}>
              <p className={style.pS}>
                Programa de capacitación y apoyo para trabajar prevención y
                autocuidado en niños y niñas durante la contingencia COVID-19
              </p>
            </div>
            <div className={style.bFather}>
              <Link to="/Adulto">
                <button title="Adulto" className={style.bInit}>
                  {" "}
                  Responsable del niñ@{" "}
                </button>
              </Link>
              <Link to="/Niños">
                
                <button title="Niños" className={`${style.bInit} ${style.bInit2}` }>
                  {" "}
                  Soy niñ@{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Inicio;
