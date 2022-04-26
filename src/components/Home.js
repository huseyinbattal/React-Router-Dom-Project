import React, { Component } from 'react'
import Content from './Content'
import Slider from './Slider'

export default class Home extends Component {
  render() {
    return (<>
        <Slider />
        <Content />
        </>
    )
  }
}
