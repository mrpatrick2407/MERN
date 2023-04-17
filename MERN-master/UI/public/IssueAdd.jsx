import React from 'react';



export default  class IssueAdd extends React.Component{
    constructor(){
        super()
        this.handle=this.handle.bind(this)
    }



            handle(e){
                        e.preventDefault();
                        const form = document.forms.issueAdd;
                        const newissue = {owner:form.owner.value,title:form.title.value,due:new Date(new Date().getTime()+1000*24*60*60*10)}
                        const createissue=this.props.createIssue;
                        createissue(newissue)
                        form.owner.value='';
                        form.title.value='';
                }
                    render(){
                        return(
                        <form name="issueAdd" onSubmit={this.handle} className="" >
                            <input type ="text" name="owner" placeholder="owner" />
                            <input type ="text" name="title" placeholder="title" />
                            <button>Add</button>
                        </form>

                            );
                    }
}
