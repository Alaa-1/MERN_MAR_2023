import React, { Component } from 'react'

export default class Demo extends Component {
  render() {
    const {phone} = this.props
    return (
      <fieldset>
        <legend>Demo.jsx</legend>
      <div>Demo</div>
      <p>{phone}</p>
      </fieldset>
    )
  }
}
