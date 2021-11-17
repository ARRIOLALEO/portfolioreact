import React, {  Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Index from './mainpage/index';
import Menu from './layouts/menu';
import Footer from './layouts/footer';
import Post from './post/post';
import Timeline from './timeline/timeline';
class App extends Component{
  render(){
    return(
      <Router history={createBrowserHistory}>
       <>
        <Menu/>
        <Switch>
          <Route exact  path="/">
            <Index/>
          </Route>
          <Route path="/timeline">
            <Timeline/>
          </Route>
          <Route path="/post/:title" render={(props) =><Post dataProps={props}/>}/>
          </Switch>
        <Footer/>
      </>
        </Router>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
