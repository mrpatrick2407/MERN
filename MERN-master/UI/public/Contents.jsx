import {Switch,Route,Redirect,useLocation} from 'react-router-dom'
import IssueList from './IssueList.jsx';
import IssueReport from './IssueReport.js';
import IssueEdit from './IssueEdit.jsx';
import {motion,AnimatePresence} from 'framer-motion'
import IssueDetails from './IssueDetail.jsx'

function LocationProvider({children}){
    return (<AnimatePresence>{children}</AnimatePresence>)
}

export default function Content(){
    return(
        <AnimatePresence>
            <Switch >
            <Redirect exact from='/' to ='/issues' />
            <Route  path='/issues' component={IssueList} />
            <Route exact path='/report' component={IssueReport} />
            <Route exact path='/edit/:id' component={IssueEdit} />
              
           
            </Switch>   
        </AnimatePresence>
         
    )
}