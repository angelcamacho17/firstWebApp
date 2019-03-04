import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";

class NavbarPage extends Component {
    state = {
      isOpen: false
    };

    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }
    render (){
      const loginRegLink = (
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to="/">Login</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/profile">Register</MDBNavLink>
          </MDBNavItem>
      </MDBNavbarNav>
      )
      const userLink = (
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/profile">Profile</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink onClick={this.logOut.bind(this)}  to="/login">Log Out</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      )
  return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            
            {localStorage.usertoken ? userLink : loginRegLink}

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;