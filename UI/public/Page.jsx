import Contents from './Contents.jsx'
import { NavLink } from 'react-router-dom'
import {BsFillChatLeftDotsFill} from 'react-icons/bs'
import { Navbar,Nav,NavItem ,Tooltip,OverlayTrigger,NavDropdown,Dropdown} from 'react-bootstrap'
import Change from './app.jsx'
function Navi(){
    return(
            <Navbar  bg="light" expand="md">
              <Navbar.Brand className="dark">IssueTracker</Navbar.Brand>
              
                <Nav className="">
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
                <Nav style={{position:'absolute',right:'20px'}} >
                <NavDropdown bsPrefix='BsFillChatLeftDotsFill'>
                   <BsFillChatLeftDotsFill/>
                </NavDropdown>
                </Nav>
            </Navbar>
          
        
    )
}
export default function Pages(){
    return(
        <div>
            <Navi/>
            <Contents/>
            
        </div>
    )
}