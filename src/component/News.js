import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <div className='row'>
        <div className='col-md-3'>
        <Newsitem title="mytitle" description="description"/>
        </div>

        </div>
      </div>
      
    )
  }
}
