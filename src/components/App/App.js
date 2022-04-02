import './App.css';
import Logo from '../../images/Logo.jpg';
import img2 from '../../images/Cards/IMG-3368.JPG';
import img3 from '../../images/Stickers/IMG-3635.JPG';
import img4 from '../../images/Stickers/IMG-3642.JPG';
import {Nav} from '../Nav/Nav.js';
//import { render } from '@testing-library/react';
import { Carousel } from "../Carousell/Carousel.js";
import React from 'react';

class App extends React.Component {
  
  constructor(props)
  {
    super(props);
    this.state = {
      carouselImgs: [Logo, img2, img3, img4],
      currentCarouselImgNum: 0
    };
    this.changeCarousel = this.changeCarousel.bind(this);
  }
  
  changeCarousel(direction) 
  {
    this.state.currentCarouselImgNum = (this.state.currentCarouselImgNum + direction) % this.state.carouselImgs.length;
    this.setState({currentCarouselImgNum: this.state.currentCarouselImgNum > -1 ? this.state.currentCarouselImgNum : this.state.carouselImgs.length - 1});
  }

  
  render()
  {
    return (
      <div>
        <Nav />
        <Carousel image={this.state.carouselImgs[this.state.currentCarouselImgNum]} onChangeImg={this.changeCarousel}/>
      </div>
    )
  }
}

export default App;