import { Link, Outlet } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Layout = () => {
    return ( 
        <>
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="update">Display</Nav.Link>
            <Nav.Link as={Link} to="conatct">Contact</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

         
      
      <div id="wrapper">
      <Outlet/>

      </div>
      <hr size="4" color="red"/>
       www.company.com
      
        </>
     );
}
 
export default Layout;