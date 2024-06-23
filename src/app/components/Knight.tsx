// libraries
import React, { Component } from 'react'
import { FaChessKnight } from "react-icons/fa6";

export default class Knight extends Component {
  render() {
    return (
      <div
        style={{
          color: 'black',
          cursor: 'move',
          fontSize: '3em',
        }}
      >
        <FaChessKnight />
      </div>
    )
  }
}
