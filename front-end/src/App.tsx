import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import AddingPage from './pages/AddingPage';
import VideoPage from './pages/VideoPage';
import Header from './components/Header';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container>
      <Router>
        <div>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/adding" component={AddingPage} />
            <Route path="/video/:id" component={VideoPage} />
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
