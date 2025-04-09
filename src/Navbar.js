import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavbarL = () => {
    return (        
        <><h1 class="display-4 fst-italic navbar">My blog using React</h1>
        <Navbar className="navbar" bg="success" variant="dark">
            <Container>
                <Nav className="me-auto links">
                    <Navbar.Brand href="/">My Blog</Navbar.Brand>
                    <Nav.Link href="/"><Link to="/" style={{
                            color: "white",
                            backgroundColor: '#f1350d',
                            borderRadius: '8px',
                        }}>Home</Link></Nav.Link>
                    <Nav.Link href="/create"><Link to="/create" style={{
                            color: "white",
                            backgroundColor: '#f1350d',
                            borderRadius: '8px',
                        }}>New Entry</Link></Nav.Link>  
                </Nav>
                
            </Container>

        </Navbar></>
     );
}
 
export default NavbarL;