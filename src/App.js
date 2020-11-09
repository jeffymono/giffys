import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import SearchResult from './pages/SearchResult';
import Detail from './pages/Detail';
import { GifContextProvider } from './context/GifContext';
const Home = React.lazy(()=>import('./pages/Home'))
function App() {

  return (
    <Router>
    <div className="App">
      <section className="App-section">
        <Link to="/">
          <img className="App-logo" src="/banner1.jpg" alt=""/>
        </Link>
        <GifContextProvider>
        <Switch>
          <Suspense fallback={<h4>Loading</h4>}>
          <Route exact path="/" component={Home}/>
          <Route path='/gifs/:keyword' component={SearchResult}/>
          <Route path='/gif/:id' component={Detail}/>
          </Suspense>
        </Switch>
        </GifContextProvider>
      </section>
    </div>
    </Router>
  );
}

export default App;
