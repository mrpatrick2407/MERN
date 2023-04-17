import Contents from './Contents.jsx'
import { NavLink } from 'react-router-dom'
import Change from './app.jsx'
function Nav(){
    return(
        <nav>
            
        <NavLink exact to="/">Home</NavLink>
        |
        <NavLink to="/issues">Issues</NavLink>
        |
        <NavLink to="/report">Report</NavLink>
        </nav>
    )
}
export default function Pages(){
    return(
        <div>
            <Nav/>
            <Contents/>
            
        </div>
    )
}