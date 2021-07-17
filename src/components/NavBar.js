import { Container, Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import logo from "../pictures/access-wheel-logo.png";
import newlogo from "../pictures/newlogo.png";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import AddLocation from './AddLocation';

const NavBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">
						<img id="landingpageLogo" src={newlogo} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
							<Nav.Link onClick={handleShow}>Add New Location</Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add a new location</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddLocation/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Submit
                </Button>
                </Modal.Footer>
            </Modal>
		</>
	);
};

export default NavBar;
