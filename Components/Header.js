import React from 'react';
import './Header.css';

class Header extends React.Component {

    state = {
         interedData:null,
    }

   sendData = (EO) => {
        this.setState({interedData: EO.target.value})
    } 

 render() {
         return (
                  <div className='Header'>
                          {
                            (this.props.selectedScreenID) ?
                                <div className='Header__input'>
                                    <span className='Header__input Header__input-back' onClick={()=>this.props.clearId()}>&#x25C4;</span><h1>{this.props.selectedScreenID.name}</h1>
                                </div>
                            :
                                <div className='Header__input'>
                                   <input onChange={this.sendData} className='Header__input Header__input-input' type='text'/><button onClick={()=> { this.props.search(this.state.interedData)}} >search</button>
                                </div>
                          }
                  </div>
             )
    }
}

export default Header; 