import React from 'react';
import { Container, Dropdown, Nav, NavDropdown, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import {button} from 'bootstrap'

const Menu = () => {
  return (
    <> 
    <div className="container mb-3">
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <Dropdown.Item href="/small-cal">Small Calculator App</Dropdown.Item>
               <NavDropdown.Item href="/small_count">Small Counter App</NavDropdown.Item>
               <NavDropdown.Item href="/calculator">Small Calculator</NavDropdown.Item>
               <NavDropdown.Item href="/counter">Counter</NavDropdown.Item>
               <NavDropdown.Item href="/small-counter">CountByFourCounter</NavDropdown.Item>
               <NavDropdown.Item href="/view">ViewTodo</NavDropdown.Item>
               <NavDropdown.Item href="/todo">Todo App</NavDropdown.Item>
               <NavDropdown.Item href="/create">CreateTodo</NavDropdown.Item>
               <NavDropdown.Item href="/demotodo">DemoTodo</NavDropdown.Item>
               <NavDropdown.Item href="/userlist">Api User App</NavDropdown.Item>
               <NavDropdown.Item href="/testloop">TestLoop</NavDropdown.Item>
               <NavDropdown.Item href="/userphotos">Userphotos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
    
    {/* <div>
      <button type="button" className="btn btn-primary">
        <Link to="/" style={{color : '#fff'}}>Home</Link>
      </button>{' '}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary">
        <Link to="/small-cal" style={{color : '#fff'}}>Small Calculator App</Link>
      </button>{' '}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary">
        <Link to="/small_count" style={{color : '#fff'}}>Small Counter App</Link>
      </button>{' '}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary">
        <Link to="/calculator" style={{color : '#fff'}}>Small Calculator</Link>
      </button>{' '}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary">
        <Link to="/counter" style={{color : '#fff'}}> Counter</Link>
      </button>{' '}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary">
        <Link to="/small-counter" style={{color : '#fff'}}> CountByFourCounter</Link>
      </button>{' '}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary">
        <Link to="/view" style={{color : '#fff'}}> ViewTodo</Link>
      </button>{' '}
      &nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary">
        <Link to="/todo" style={{color : '#fff'}}> Todo App</Link>
      </button>{' '}
      &nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary">
        <Link to="/create" style={{color : '#fff'}}>CreateTodo</Link>
      </button>{' '}
      &nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary">
        <Link to="/demotodo" style={{color : '#fff'}}>DemoTodo</Link>
      </button>{' '}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary">
        <Link to="/userlist" style={{color : '#fff'}}>Api User App</Link>
      </button>{' '}
      &nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary">
        <Link to="/testloop" style={{color : '#fff'}}>TestLoop</Link>
      </button>{' '}
      <button className="btn btn-primary">
        <Link to="/userphotos" style={{color : '#fff'}}>Userphotos</Link>
      </button>
    </div> */}
    </>
  );
};

export default Menu;
