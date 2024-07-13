// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import BookingPage from './BookingPage'; // Ensure the path is correct

// const App = () => {
//     return (
//         <Router>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/book">Book a Table</Link>
//                     </li>
//                 </ul>
//             </nav>
//             <Switch>
//                 <Route path="/" exact>
//                     <h1>Welcome to Little Lemon</h1>
//                 </Route>
//                 <Route path="/book" component={BookingPage} />
//             </Switch>
//         </Router>
//     );
// };

// export default App;


import React from "react";
export default function App() {
    const [number, setNumber ] = React.useState(1);
    function increment() {
        setNumber((prevNumber) => preNumber + 1);
    }
    return (
        <>
        <h1 data-test-id="currentNumber"> {number} </h1>
        <button data-testid="add-one" onClick={increment}>
            Add one
        </button>
        </>
    );
}


