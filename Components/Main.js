import React, { Fragment } from 'react';
import './Main.css';
import Header from './Header'
import Content from './Content'

class Main extends React.Component {

    state = {
           data:null,
           renderDataItems:null,
           selectedScreenID:null,
    }

    
        componentDidMount = () => { 
            fetch("https://api.tvmaze.com/search/shows?q=batman",{'method':'GET'})
            .then( response => response.json() ) 
            .then( data => this.setData(data) )
            .catch( error => { console.log(error); } )
        }

        setId = (id) => {
            let selectedData = this.state.renderDataItems.find( v=> v.id === id )
            this.setState({selectedScreenID:selectedData})
            }

        clearId = () => { this.setState({selectedScreenID:null}) }

        searchCb = (enteredData) => {
            let filterCode =  this.state.data.filter(v=> { 
                return v.name.indexOf(enteredData) !== -1
            }) 
            this.setState({ renderDataItems:filterCode})
        }

        setData = (data) => {
            let dataReady = data.map( v => {
                return { id: v.show.id, 
                        name: v.show.name,
                        img: v.show.image.medium,
                        summary: v.show.summary
                    }})
            this.setState({data:dataReady})
        }


    render() {
     
         return (
             (this.state.data) ?
                 <Fragment>
                        <Header clearId={this.clearId} selectedScreenID={this.state.selectedScreenID} search={this.searchCb}/>
                        <Content setID={this.setId} selectedScreenID={this.state.selectedScreenID} data={this.state.renderDataItems}/>
                 </Fragment>
                 : <div>data loading...</div>
             )
    }

}

export default Main; 


