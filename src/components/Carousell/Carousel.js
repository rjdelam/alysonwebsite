import React from "react";
import "./Carousel.css";
import Logo from "../../images/Logo.jpg";

export class Carousel extends React.Component 
{

    constructor(props)
    {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(e)
    {
        this.props.onChangeImg(e.target.value === '<' ? 'left' : 'right');
    }

    render()
    {
        return ( 
            <div>
                <button onClick={this.handleButtonClick}>{'<'}</button>
                <img src={this.props.image}/>
                <button onClick={this.handleButtonClick}>{'>'}</button>
            </div>
        )
    }
}