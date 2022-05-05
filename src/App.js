import React, { Component } from 'react'
import BotonSumar from './BotonSumar';
import MuestraCuenta from './MuestraCuenta';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contador:0
    }
    this.aumentarContador = this.aumentarContador.bind(this);
  }

  aumentarContador() { 
    this.setState({ contador: this.state.contador + 1})
  } 

  decrementarContador(){
    if(this.state.contador > 0){
      this.setState({
        contador: this.state.contador - 1
      })

    }
  }

  render() {
    return (
      <>
        <BotonSumar aumentarContador={this.aumentarContador}/>
        <button onClick={()=>this.decrementarContador()} >Restar</button>
        <MuestraCuenta valorMostrar={this.state.contador} />
      </>
    )
  }
}
