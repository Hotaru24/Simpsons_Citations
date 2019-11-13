import React from 'react';
import axios from 'axios';


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image : "loading",
      character :"",
      quote: "",
    };
  }
 
  componentWillMount = () => {
    axios('https://quests.wilders.dev/simpsons-quotes/quotes?count=num')
    .then((result) => {
        this.setState({
            image: result.data[0].image,
            character: result.data[0].character,
            quote: result.data[0].quote
        })
    })
  }
  
  
 render() {
    return (
        <div>
            <figure className="QuoteCard">
                <div>
                    <img src={this.state.image} />   
                </div> 
                <div>
                    <p>{this.state.quote}</p> 
                    <p>{this.state.character}</p>
                </div>
                <button id="button" onClick={this.componentWillMount}>Next</button>
            </figure>
        </div>
    );
  }
}

export default Card;