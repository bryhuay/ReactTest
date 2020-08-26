import React, {Component, useState, useEffect} from 'react';
import axios from '../AxiosFile/axios.js';
import Book from './book';
import { connect } from 'react-redux';
class Books extends Component{
    state = {
        books:[],
        authors: []
    }
    readBooks(){
        axios.get('5e1683a23000004d00d56089', {
        }
      )
      .then( res => { 
          let response = res.data;
          this.setState({books: response})
          var authors = this.state.authors;
          for(let i=0; i<response.length ; i++){
            response[i].authorName = authors.find(x =>x.id == response[i].authorId).name;
          }
          this.setState({books: response})
        
      })
      .catch( res => {
  
        console.log(res);
      })
    }
    readAuthors(){
        axios.get('5e1684a93000002c00d5608e', {
        }
      )
      .then( res => { 
          let response = res.data;
          this.setState({authors: response})
        
      })
      .catch( res => {
  
        console.log(res);
      })
    }
    componentDidMount() {
        this.readAuthors();
        this.readBooks();
        
    }
    
    render() {
        
        return (
            <div>
                {this.state.books.map(function(item,i){
                     return <Book className="BookBoder" title={item.title} author={item.authorName} description={item.description} key={item.title}></Book>

                })
                }
                
            </div>
        )
    }
}

export default Books;