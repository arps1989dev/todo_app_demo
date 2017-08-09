import React from 'react';
import Clock from './clock'; 
import Toggle from './toggle';
import LoggingButton from './loggingbutton';
import Mailbox from './mailbox';
import NumberList from './numberlist'
import Blog from './blog'
import NameForm from './nameform'
import EssayForm from './essayform'
import FlavorForm from './flavorform'
import Reservation from './reservation'
import Calculator from './calculator'
import SignUpDialog from './signupdialog'



import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    var messages = ['React', 'Re: React', 'Re:Re: React'];
    var numbers = [1, 2, 3, 4, 5];
    var posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];
    // const doubled = numbers.map((number) => number * 2);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          
        </div>
        <p className="App-intro">
          
        
        <Clock/>
        <Toggle /><br/><br />
        <LoggingButton />
        <Mailbox unreadMessages={messages} />
        <page />
        {/*{doubled}*/}
        <NumberList numbers={numbers} />
        <Blog posts={posts} />
        <NameForm/>      <br/>      <hr />
        <EssayForm />    <br/>      <hr />
        <FlavorForm/>    <br/>      <hr />
        <Reservation />  <br/>      <hr />
        <Calculator />   <br/>			<hr />
        <SignUpDialog /> <br/>			<hr />
        </p>
      </div>
    );
  }
}

export default App;
