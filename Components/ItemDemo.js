import React from 'react';
import './ItemDemo.css';

export default function ItemDemo(props) {
    return (
        <div className='ItemDemo'>
            <img src={props.data.img}/>
            <h1>{props.data.name}</h1>
            {props.data.summary.split('<p>').join('').split('</p>').join('')}
        </div>
    );
  }