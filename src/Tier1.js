import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }
  // may need this on Tier 2 as well instead of passing it as a callback
  updateColor = () => {
    const newColor = getRandomColor();
    this.setState({color: newColor, childColor: getReducedColor(newColor)});
  }

  handleChildClick(e) {
    e.stopPropagation();
    this.setState({childColor: getRandomColor()});
  }

  render() {
    return (
      <div onClick={this.updateColor} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} handleChildClick={this.handleChildClick.bind(this)} handleChildClickCopy={this.handleChildClick} />
        <Tier2 color={this.state.childColor} handleChildClick={this.handleChildClick.bind(this)} handleChildClickCopy={this.handleChildClick} />
      </div>
    )
  }
}
