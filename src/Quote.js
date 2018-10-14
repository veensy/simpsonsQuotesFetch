import React, { Component } from 'react';
import './Quote.css'

class Quote extends Component {


    render(){
        return(
            <div className="quote">
              <p><button onClick={this.props.getQuotes}>Change</button></p> 
                <img src={this.props.image} alt =""/>
                <h1>{this.props.quote}</h1>
                <p>{this.props.character}</p>                

            </div>
        )
    }
}
export default Quote