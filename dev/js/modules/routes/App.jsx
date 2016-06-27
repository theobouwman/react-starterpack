import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React Router Template By Theo</h1>
                <ul role="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
};

export default App;
