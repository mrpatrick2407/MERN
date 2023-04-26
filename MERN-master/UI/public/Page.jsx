import Contents from './Contents.jsx'
import { NavLink } from 'react-router-dom'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {IoAdd} from 'react-icons/io5'
import {Container, Navbar,Nav,NavItem ,Tooltip,OverlayTrigger,NavDropdown,Dropdown} from 'react-bootstrap'
import Change from './app.jsx'
function Navi(){
    const Create = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Create Issue
        </Tooltip>
      );
    return(
            <Navbar  bg="light" expand="md">
              <Navbar.Brand className="dark">IssueTracker</Navbar.Brand>
              
                <Nav >
                  <NavItem>
                    <NavLink exact to="/" className="nav-link">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/issues" className="nav-link">
                      Issues
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/report" className="nav-link">
                      Report
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav variant='secondary' style={{position:'absolute',right:'100px'}} >
                    <OverlayTrigger
                    placement='left'
                    delay={{show:250,hide:250}}
                    overlay={Create}>

                    <IoAdd variant='secondary' ></IoAdd>

                    </OverlayTrigger>
                </Nav>
                <Nav style={{position:'absolute',right:'30px'}} >
                <Dropdown as="div" drop='start'>
                <Dropdown.Toggle variant='secondary' >
                <BsThreeDotsVertical/>
                    
                   </Dropdown.Toggle >

                  <Dropdown.Menu >
                       <Dropdown.Item   href='#/about' >
                           About
                       </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
                    
               
                
                </Nav>
            </Navbar>
          
        
    )
}
function Footer() {  return (    <small>      <p className="text-center">        Full source code available at this        {' '}        <a href="https://github.com/mrpatrick2407/MERN">          GitHub repository        </a>      </p>    </small>  ); }
export default function Pages(){
    return(
        <div>
            <Navi/>
            <Container  fluid >
            <Contents/>

            </Container>
            <Footer/>
        </div>
    )
}