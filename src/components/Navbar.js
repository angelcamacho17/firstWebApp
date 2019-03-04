import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import sass from '../css/Navbar.scss';


class Navbar extends Component{
    logOut(e){
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }
    render (){
        const loginRegLink = (
        <ul className="navbar-nav">
                <li className="nav-item">
                     <Link to="/login" className="nav-link">
                        Login
                     </Link>
                </li>
                <li className="nav-item">
                     <Link to="/register" className="nav-link">
                        Register
                     </Link>
                </li>
            </ul>
        )
        const userLink = (
        
            <nav className="side-nav">
                <Link to="/" onlyActiveOnIndex={true} className='router-link'>
                    <div className="side-nav-logo">
                        <img src="/img/gomocha-logo-sml.png" />
                    </div>
                </Link>
                <Link to="/" onlyActiveOnIndex={true} className='router-link'>
                    <i className="fa fa-home fa-2x" aria-hidden="true"></i>
                </Link>
                <Link to="/previous-orders" className="prev-orders-link">
                    <i className="fa fa-clock-o fa-2x"></i>
                </Link>
                <Link to="favorite-orders" className="fav-orders-link">
                    <i className="fa fa-heart fa-2x"></i>
                </Link>
                <div className="side-nav-divider"></div>
                <Link to="/" className='router-link' onClick={this._handleUsernameRemove}><i className="fa fa-sign-out fa-2x" aria-hidden="true"></i></Link>
            </nav>
        
        <ul className="navbar-nav">
                <li>
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                     <Link to="/profile" className="nav-link">
                        Profile
                     </Link>
                </li>
                <li>
                    <Link to="/todo" className="nav-link">
                        To Do's
                    </Link>
                </li>
                <li className="nav-item">
                     <Link to="/create" className="nav-link">
                        Create To Do
                     </Link>
                </li>
                <li className="nav-item">
                    <Link onClick={this.logOut.bind(this)} className="nav-link" to="/login">
                        Log Out
                    </Link>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar1"
                aria-controls="navbar1"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>

        </nav>
        )
    }
}

export default withRouter(Navbar);