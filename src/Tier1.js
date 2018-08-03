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

  handleChildClick = (e, targetComponent) => {
    e.stopPropagation();
    // e and targetComponent = where the click originated
    // binding targetComponent to updateColor doesn't seem to work
    // changing the state of Tier 2 will automatically change the props of Tier 3
    // Tier 3 can use the e to update the style cand bg color, i think
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.updateColor} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} handleChildClick={this.handleChildClick} />
        <Tier2 color={this.state.childColor} handleChildClick={this.handleChildClick} />
      </div>
    )
  }
}
