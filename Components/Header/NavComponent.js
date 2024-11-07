import Link from "next/link";
import { Navbar } from "react-bootstrap";

const NavComponent = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary warning">
        <Container>
          <Navbar.Brand href="#home">Todo List</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href='/'>Home</Link>
              <Link href='/completed-todos'>Todos</Link>
              <Link href='/pending-todos'>Completed Todos</Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Contacts</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavComponent;
