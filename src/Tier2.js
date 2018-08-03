import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      childColor: getReducedColor(this.props.color),
      handleChildClickCopy: this.props.handleChildClickCopy.bind(this)
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({ childColor: getReducedColor(nextProps.color) })
  }

  render() {
    return (
      <div onClick={this.props.handleChildClick} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.state.handleChildClickCopy}/>
        <Tier3 color={this.state.childColor} handleChildClick={this.state.handleChildClickCopy}/>
      </div>
    )
  }
}
