import React, { Component } from 'react';

class Intervaltime extends Component {
    constructor(props){
    super(props);
    this.state={time:0}
    }
    componentDidMount() {
        setInterval(() => {
              this.setState({time: this.state.time + 1});
             }, 1000);
                         }
    componentWillUnmount() {
        clearInterval(this.interval);
                           }
    render() {
        return (
            <div>
                <div className="remote" style={{marginTop:"30px"}}>
                    <h6 className="App-header" style={{color:"red"}}>
                        {this.state.time} secondes sont passées  dés que le composant est remonté
                    </h6>
                </div>
            </div>
        );
    }
}
export default Intervaltime;
