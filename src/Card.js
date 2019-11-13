import React, {Fragment} from 'react';
import axios from 'axios';
import './Card.css';


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
        <Fragment>
            <figure className="QuoteCard">
                <div id="img">
                    <img src={this.state.image} />   
                </div> 
                <div className="quoteName">
                    <p id="quote">{this.state.quote}</p> 
                    <h3>{this.state.character}</h3>
                </div>
                <button id="button" onClick={this.componentWillMount}>Next</button>
            </figure>
        </Fragment>
    );
  }
}

export default Card;