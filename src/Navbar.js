import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

import "./Navbar.css";

function NavBar() {
  return (
    <div>
      <Navbar className="m-3" expand="">
        <NavLink exact to="/products" className="navbar-brand">
          Shoply
        </NavLink>
        <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/cart">Cart</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
