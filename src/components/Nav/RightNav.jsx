import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;

  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) { 
    font-style: normal;
    letter-spacing: 0.05em;
    font-family: Arial;
    font-size: 20px;
    flex-flow: column nowrap;
    background-color: #592d84;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 128vh;
    width: 300px;
    padding-top: 3.5rem;
    padding-left: 0.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to='/'> 
      <li>Inicio</li>
            </Link>
            <Link to='/trivia'> 
      <li>Trivia</li>
      </Link>
      <Link to='/menucolorear'> 
      <li>Colorea</li>
      </Link>
      <Link to='/videos'> 
      <li>Videos</li>
      </Link>
    </Ul>
  );
};

export default RightNav;
