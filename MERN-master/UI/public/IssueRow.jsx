import { Link, NavLink ,withRouter} from "react-router-dom";
import {Button} from 'react-bootstrap'
import {FaTimes} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'
 function IssueRow(props)

{ 
    
    const issue=props.issue;
    const closeIssue=props.closeIssue;
    const index=props.index;
    const  deleteissue=props.deleteissue
    
    return ( 
        <>
        <tr> 
        <td >{issue.id}</td> 
        <td >{issue.status}</td> 
        <td >{issue.owner}</td> 
        <td >{issue.created.toDateString()}</td> 
        <td >{issue.effort}</td> 
        <td >{issue.due? issue.due.toDateString():''}</td> 
        <td >{issue.title}</td> 
        <td><Link to={`/edit/${issue.id}`}>Edit</Link> { ' [] '}
        <NavLink to={`/issues/${issue.id}`}>Select</NavLink>{ ' [] '}
        <Button size="sm" type="button" onClick={()=>{closeIssue(index)}}><FaTimes/></Button>
        <Button variant="danger" size="sm"  type="button" onClick={()=>{deleteissue(index)}}><AiFillDelete/></Button>
        
        </td>
        
        </tr>
        </>
        );
} 
export default withRouter(IssueRow)
