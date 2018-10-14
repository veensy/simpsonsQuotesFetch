import React, { Component } from 'react';
import Quote from './Quote'


class QuotesApi extends Component {

  state={
    results:[]
  }



  getQuotes = async () => {
    
    const recup_data = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=1`)
    const api_data = await recup_data.json()
    this.setState({
      results : api_data
      
      
    })
  }
    componentDidMount(){
        this.getQuotes();
        
    }
 
  

  render() {
    return (
      <div >
          
          {this.state.results.map((element,id)=>
          <Quote getQuotes ={this.getQuotes}
                 key={element.id}   
                 quote={element.quote} 
                 character={element.character}
                 image={element.image}
                 direction={element.characterDirection}
                 />

          )}
        
      </div>
    );
  }
}

export default QuotesApi;
