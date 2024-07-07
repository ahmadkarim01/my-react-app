import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BookingPage from './BookingPage'; // Ensure the path is correct

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/book">Book a Table</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact>
                    <h1>Welcome to Little Lemon</h1>
                </Route>
                <Route path="/book" component={BookingPage} />
            </Switch>
        </Router>
    );
};

export default App;
