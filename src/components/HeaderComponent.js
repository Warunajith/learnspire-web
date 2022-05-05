import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaguides.net" className="navbar-brand"><h1>Leaning Management</h1></a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;