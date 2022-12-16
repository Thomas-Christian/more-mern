import { Navbar, Nav} from 'react-bootstrap';
import "./navbar.css";

const Navigation = () => {
  return (
    <> 
      <Navbar expand='lg' sticky='top'>

        <div className='container-fluid'>

          <Navbar.Brand> Bon APPetite </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-content"/>

          <Navbar.Collapse id="navbar-content" className='justify-content-end'> 

            <Nav > 
              
              <Nav.Link href='/'> Home </Nav.Link>
              <Nav.Link href='/recipes'> Recipes </Nav.Link>
              <Nav.Link href='/about'> About </Nav.Link>
              <Nav.Link href='/contact'> Contact </Nav.Link>
        
            </Nav>

          </Navbar.Collapse>

        </div>

      </Navbar>
    </>
  );
};

export default Navigation;
