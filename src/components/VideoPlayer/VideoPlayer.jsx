import React, { Component } from 'react';
import ReactImageVideoLightbox from 'react-image-video-lightbox';
import HeaderKids from "../Header/ChildrensHeader/Header";
import Paragraph from "../Children/Paragraph";
import style from './VideoPlayer.module.css'
import hootie from '../../img/header/header-hootie.png'
import puma from '../../img/header/header-puma.png'
import { Link } from "react-router-dom";
import bRegresar from '../../assets/img/botonregresar.png'

class VideoPlayer extends Component {

  constructor() {
    super(...arguments);

    this.state = {
      lightboxOpen: true
    };
  }

  render() {
    return (
        <div className={style.divContainer}>
       <HeaderKids leftImage={hootie} rightImage={puma} />
       <Paragraph  paragraph={`Puma Espuma y el Escuadron Prevención`}   />
       
      <div className={style.containerVideo}>
        {/*<button onClick={() => { this.setState({ lightboxOpen: true }); }}>Open Lightbox</button>*/}
        {
          this.state.lightboxOpen &&
          <ReactImageVideoLightbox
      
       
            data={[

              { url: 'https://www.youtube.com/embed/G2BHb6kWnRc', type: 'video', altTag: 'placeholder video' },
              { url: 'https://www.youtube.com/embed/tuILs6Zedco',  type: 'video', altTag: 'placeholder video' }]}
            startIndex={0}
            showResourceCount={true}
            onCloseCallback={() => { this.setState({ lightboxOpen: false }); }} />
            
        }
       
      </div>
      <div className={style.fatherbutBack}>
                <Link to='/Niños'>
                <img  className={style.bBack}src={bRegresar}>
                </img>
                </Link>
            </div>

      </div>
    );
  }
}

export default VideoPlayer;
