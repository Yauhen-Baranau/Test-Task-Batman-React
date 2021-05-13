import React from 'react';
import './Content.css';
import ContentItem  from './ContentItem'
import ItemDemo from './ItemDemo'

export default function Content(props) {
    let itemsCode = (props.data)? props.data.map(v=>{
        return( <ContentItem setID={props.setID} key={v.id} data={ {name:v.name, id:v.id, img:v.img, summary: v.summary} }/>)
       }) : null

let itemDemodata = props.selectedScreenID && props.selectedScreenID 

    return (
        <div className='Content'>
        {
          props.selectedScreenID ?
             <ItemDemo data={itemDemodata} />
             :  
             itemsCode
         } 
     </div>
    );
  }



