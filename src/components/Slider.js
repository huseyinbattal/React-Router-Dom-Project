import React, { Component } from 'react'
import {Carousel} from "react-bootstrap"

export default class Slider extends Component {
  render() {
      return (
          <div style={{margin:"0 auto"}}>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://yeditepe.edu.tr/sites/default/files/images/yeditepe_university.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://yeditepe.edu.tr/sites/default/files/images/yeditepe_university.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://yeditepe.edu.tr/sites/default/files/images/yeditepe_university.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
              </Carousel>
              </div>
    )
  }
}
