import { getSuggestedQuery } from '@testing-library/dom';
import React,{ Component } from 'react'


export default class App extends Component {
   
  
  
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      bio: "",
      profession: '',
      isOn: false
    };
  }

  profile = {
    fullName: "FULLNAME: Mahdi krimi",
    bio: "BIO: Im cool",
    imgSrc: "./me.jpg",
    profession: 'PROFESSION: Student',
    isOn: false
  }

  update = () =>  {if(this.state.isOn === false)
    {this.setState({...this.profile, isOn: true, button:"isOn"});}
    else {this.setState({...this.state})}
    }
  
  gon(){
    this.setState({
      fullName: "CODENAME: Cicada 3301"
    })
  }
   
  render() {
    return (
      <div>
        <h1>{this.state.fullName}</h1>
        <h1>{this.state.bio}</h1>
        <button onClick={() => this.gon()}> Click </button>
        <h3>{this.state.profession}</h3>
        <button onClick={this.update}>{this.state.isOn}Show</button>
        <button onClick={this.update2}>{this.state.isOn}Hide</button>
        <img src={this.state.imgSrc}/>
      </div>

      
    )
    
  }
}
