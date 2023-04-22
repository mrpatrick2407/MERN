import IssueRow from './IssueRow.jsx'


export default function IssueTable (props)
{
        const closeIssue=props.closeIssue;
         const deleteissue=props.deleteissue;

        console.log('hi');
        const issueRows=props.issues.map((issue,index)=><IssueRow 
        key={issue.id} 
        issue={issue}
        closeIssue={closeIssue}
        deleteissue={deleteissue}
        index={index}/> );
        return(
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th >ID</th>
                        <th >Status</th>
                        <th >Owner</th>
                        <th >Created</th>
                        <th >Effort</th>
                        <th>Due</th>
                        <th >Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                
                    {issueRows}
                    
                </tbody>
            </table>
        );
    }

   