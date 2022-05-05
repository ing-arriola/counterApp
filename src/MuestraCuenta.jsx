import React, { Component } from 'react'

export default class MuestraCuenta extends Component {
  render() {
    return (
        <p> {this.props.valorMostrar} </p>
    )
  }
}
