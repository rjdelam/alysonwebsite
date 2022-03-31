import React from "react";
import "./Carousel.css";
import Logo from "../../images/Logo.jpg";

export class Carousel extends React.Component 
{

    handleButtonClick(direction)
    {
        this.props.onChangeImg(direction);
    }

    render()
    {
        return ( 
            <div>
                <button onClick={this.handleButtonClick('left')}>{'<'}</button>
                <img src={this.props.image}/>
                <button onClick={this.handleButtonClick('right')}>{'>'}</button>
            </div>
        )
    }
}