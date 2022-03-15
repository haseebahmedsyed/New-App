import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export class App extends Component {
  
    state={
      progress : 0
    }

  changeProgress=(pro)=>{
    this.setState({progress : pro})
  }
  apiKey = "ec4a5511b7854733b929bdad1ed8566e"
  // apiKey = process.env.REACT_APP_API_KEY

  render() {
    return (
      
      <Router>

         <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />

        <div>
          <Navbar/>
        </div>

        <Routes>
        <Route path='/general'  exact element={<News changeProgress = {this.changeProgress} apiKey = {this.apiKey} key='general' pageSize = "6" category = "general"/>}/>
        <Route path='/'  exact element={<News changeProgress = {this.changeProgress} apiKey = {this.apiKey} key='general' pageSize = "6" category = "general"/>}/>
        <Route path='/business'  exact element={<News changeProgress = {this.changeProgress} apiKey = {this.apiKey} key='business' pageSize = "6" category = "business"/>}/>
        <Route path='/technology'  exact element={<News changeProgress = {this.changeProgress} apiKey = {this.apiKey} key='technology' pageSize = "6" category = "technology"/>}/>
        <Route path='/entertainment'  exact element={<News changeProgress = {this.changeProgress} apiKey = {this.apiKey} key='entertainment' pageSize = "6" category = "entertainment"/>}/>
        <Route path='/health'  exact element={<News changeProgress = {this.changeProgress} apiKey = {this.apiKey} key='health' pageSize = "6" category = "health"/>}/>
        <Route path='/science'  exact element={<News changeProgress = {this.changeProgress} apiKey = {this.apiKey} key='science' pageSize = "6" category = "science"/>}/>
        <Route path='/sports'  exact element={<News changeProgress = {this.changeProgress} apiKey = {this.apiKey} key='sports' pageSize = "6" category = "sports"/>}/>
        

        </Routes>

      </Router>
    )
  }
}

export default App
