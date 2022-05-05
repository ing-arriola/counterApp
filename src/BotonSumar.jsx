import React, { Component } from 'react'

export default class BotonSumar extends Component {
  render() {
    return (
        <button onClick={this.props.aumentarContador} >Sumar</button>
    )
  }
}
