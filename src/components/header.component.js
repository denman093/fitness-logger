import "../css/Header.css";
import React, { Component } from 'react';
//import AccountBoxIcon from '@material-ui/icons/AccountBox';
//import IconButton from '@material-ui/core/IconButton';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <Navbar bg = "dark" variant = "dark">
                <Navbar.Brand>
                    <Link to="/">
                        <img
                            height="50px"
                            className="d-inline-block align-top"
                            src="https://static.vecteezy.com/system/resources/thumbnails/000/595/164/small/04012019-28.jpg"
                            alt="site logo"
                        />
                    </Link>
                    Fitness Logger
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Exercises</Link>
                    <Link to="/create" className="nav-link">Create Exercise Log</Link>
                    <Link to="/user" className="nav-link">Create User</Link>
                </Nav>
            </Navbar>
        )
    }
}

