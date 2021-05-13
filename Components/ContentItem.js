import React from 'react';
import './ContentItem.css';

export default function ContentItem(props) {
    return (
        <div className='ContentItem'>
        <img onClick={ ()=> props.setID(props.data.id)} className='ContentItem__img' src={props.data.img}/>
        <h1>{props.data.name}</h1>
    </div>
    );
  }

  