import React, {Component, useState, useEffect} from 'react';
import axios from '../AxiosFile/axios.js';
import { connect } from 'react-redux';
import '../App.css';
class Book extends Component{
    state = {
        books:[],
        authors: []
    }
    render() {
        
        return (
            <div >
                <div className='TitleItem'><h2 className='TitleItemText'> {this.props.title}</h2></div>  
                
                <div className='TitleItem'><h3 className='TitleItemText'>{this.props.author}</h3></div>  
                <div className='TitleItem'><p className='TitleItemText'>{this.props.description}</p></div>  
                               
            </div>
        )
    }
}

export default Book;