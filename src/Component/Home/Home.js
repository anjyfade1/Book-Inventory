import React, { Component } from 'react';
import Search from '../Search/Search';
import HomeDetails from './Home-Details/HomeDetails';
import './Home.css';
import axios from 'axios';
import Books from '../Books/Books';


class Home extends Component {
    constructor(){
        super();

        this.state = {
            text : '',
            books: [],
            characters:[],
            loading : false,
        }
         
    };

    onChange = e => {
        this.setState({text:e.target.value});
    };
    

    async componentDidMount() {

        const [firstResponse, secondResponse] = await Promise.all([
          axios.get('https://anapioficeandfire.com/api/books/'),
          axios.get('https://anapioficeandfire.com/api/characters/')
        ]);
    
      
        this.setState({
            books: firstResponse.data,
            characters:secondResponse.data,
        });
      
    }

    

    render() {
        return (
            <div className='Home'>
                <div className='Home-Det'>
                    <HomeDetails/>
                </div>
                <div className='Search-Home'>
                    <Search  text = {this.state.text} onchange={this.onChange} />
                </div> 
                <div className='Home-Books'>
                    <Books books = {this.state.books} text = {this.state.text} characters={this.state.characters} />                                                                                                                                                           
                </div>
            </div>

        )
    }
}

export default Home;




