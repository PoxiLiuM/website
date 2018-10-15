import React from 'react';
// import $ from 'jquery';

import './styles.scss';

class Home extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data : undefined
    }
  }

  getData = () => {
    // $.get('http://localhost:8080', (response) => {
    //   console.log(response.message)
    //   this.setState({data: response.message})
    // }).fail(() => {
    //   console.log("ERREUR")
    // })
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({data: data.message})
      })
      .catch(err => console.log("Erreur : ", err))
  }

  render(){
    if(this.state.data !== undefined){
      return(
        <div id="testbackend">
          <h1>Données :</h1>
          <p>{this.state.data}</p>
        </div>
      )
    }
    return(
      <div id="testbackend">
        <h1 onClick={() => this.getData() }>Chargement</h1>
        <p>geolib</p>
      </div>
    );
  }
}

export default Home;
