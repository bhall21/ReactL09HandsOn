import React from 'react';
import { render } from 'react-dom';

const API = 'https://jsonplaceholder.typicode.com/photos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    };
  }
  componentDidMount() {
    
    fetch(API)
      .then((response) => response.json() )
        .then((response) => {
       const photoFifty = response.filter((i,index)=> index < 50);
       console.log(photoFifty);
       this.setState({pictures: photoFifty})
       
      })
      .catch(error => this.setState({error: err }));
  }
  
  render() {
    return (
      <div>
        {this.state.pictures.map(pic => ( <img key={pic.id} src={pic.thumbnailUrl}/>))}
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));