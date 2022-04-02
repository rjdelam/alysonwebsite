import React from "react";
import "./Carousel.css";

export class Carousel extends React.Component 
{

    constructor(props)
    {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(e)
    {
        this.props.onChangeImg(e.target.id === 'left' ? -1 : 1);
    }

    render()
    {
        return ( 
            <div id="carousel">
                <button onClick={this.handleButtonClick} id="left">{'<'}</button>
                <img src={this.props.image} alt="image"/>
                <button onClick={this.handleButtonClick } id="right">{'>'}</button>
            </div>
        )
    }
}