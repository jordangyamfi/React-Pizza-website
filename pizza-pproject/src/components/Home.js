import React from 'react';
import pizza2 from '../images/pizza2.jpg';

export const Home = () => (
  <div className="subcontent">
    <h2>Just Pizza</h2>
    <p>This is some random text about Pizza, we serve Peperoni Pizza, which
      for some reason is mistakenly associated with a Pizza and Peperoni on top of it, 
      when in reality it is Pizza with Salami on top.
    </p>
  <img height = "200" width = "200" src={require('./images/pizza2.jpg')} alt = "pizza"/>
    <pizza2 />
    </div>
)