import IssueRow from './IssueRow.js'


export default function IssueTable (props)
{

        console.log('hi');
        const issueRows=props.issues.map(issue=><IssueRow key={issue.id} issue={issue}/> );
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

   