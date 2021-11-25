import React, { Component} from 'react';
import IntervalTime from './IntervalTime.js';
class App extends Component {
  state = {
    fullName:"Radhia Rahmani",
    bio:"Ingenieur en Informatique,spécialité genie logiciel diplomée de l'universite de Sesame,trés interessé par le developpement des applications web avec React Bootstrap ,et trés inspirée par les domaines d'analyse  et de traitement de données comme le datascience et la business intelligence,je vise  pour le moment à bien maitriser le framework React afin  d'etre un developpeur front-end ,à long terme je voulais bien continuer la partie backend pour devenir un developpeur Fullstack  ",
    profession:"Ingenieur en Informatique",
    img:'/profile.jpg',
    show: false,
  };
     handleClick=()=>this.setState({show:!this.state.show})
  render() {
    return(
      <div className ="text-center">
          <button className="btn btn-primary center-block mt-5 mb-4" onClick={this.handleClick}> Afficher le Profile
          </button>
              {this.state.show && (
              <div className="col-md-6 offset-md-3 mt-12  mb-10" style={{backgroundColor:"white",borderRadius:"15%",boxShadow:"2px 1px 60px black"}}>
                  <ul style={{listStyleType:"none"}}>
                      <li className="mb-1 text-uppercase fs-2 fw-bolder fst-normal" style={{color:"#FFEB4D"}}>{this.state.fullName}</li>
                      <li className="mb-4   fw-bold fs-4" style={{color:"#06111C"}}>{this.state.profession}</li>
                  </ul>
                  <div className="row">
                      <div className="col-md-6 mb-2 lh-lg">{this.state.bio}
                      </div>
                      <div className="col-md-6"><img  style={{height:"95%",width:"90%",border:"5px solid black",marginBottom:"10px",borderRadius:"10%"}}src={this.state.img }></img>
                      </div>
                  </div>
              </div>
      )}
      <IntervalTime/> 
      </div>
    )
  }
}

export default App;

