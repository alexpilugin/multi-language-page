/*
App
  TopLine
  Content
    Row
*/

import React from 'react';
import Content from './Content';
import TopLine from './TopLine';

var request = window.superagent;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contentData: {},
      lang: 'eng',
    }
  }
  componentWillMount() {
    this.loadData();
  }
  loadData() {
    const contentDataURL='./data/content.json';
    request.get(contentDataURL).end( (error, response) => {
      if (!error && response) {
        this.setState({ contentData: response.body});
        //console.log(response.body);
      } else {
        console.log('There was an error fetching content data', error);
      }
    });
  }
  shortUID() {
    return ( '0000' + ( Math.random() * Math.pow( 36, 4 ) << 0 ).toString( 36 ) ).slice( -4 );
  }
  handleClick(e){
     console.log(e.target.lang)
      this.setState({lang: e.target.lang});
  }
  render() {
    //console.log(this.state.contentData);
    if(this.state.contentData && Object.keys(this.state.contentData).length !== 0) {
      
      const langSwichers = [];
      Object.keys(this.state.contentData).forEach((key) => {
        langSwichers.push(
          <li key={this.shortUID()}>
            <a className=".pull-left" 
              href="#" 
              role="button"
              lang={key}
              onClick={this.handleClick.bind(this)}>{key}
            </a>
          </li>
        )
      });
      //console.log(langSwichers);
      var contentData = this.state.contentData[this.state.lang];
      return (
        <div className="App container">
          {/* JSON.stringify(this.state.contentData) */}
          <TopLine > <ul className="nav nav-pills">{langSwichers} </ul></TopLine>
          <Content content={contentData} />
        </div>
      );    
    } else {
      return (
        <div className="App container">
          "NO DATA in state.contentData"
        </div>
    );
    }
  }
}

export default App;
