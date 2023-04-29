import React from 'react';
import { Form,Button, Modal, Nav,NavLink } from 'react-bootstrap';
import { NavItem, withRouter } from 'react-router-dom';
import {IoAdd} from 'react-icons/io5'


class IssueAdd extends React.Component{
    constructor(props){
        super(props)
        this.state={showmodal:false}
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
                        const showmodal=this.state.showmodal;
                        return(
                            <React.Fragment>
                               <Button >
                                <IoAdd/>
                                
                                </Button>
                            <Modal show={showmodal}>
                        
                        <Form name="issueAdd" onSubmit={this.handle}  >
                            <Form.Group>
                                <Form.Label >Owner</Form.Label>
                                <Form.Control name="owner" placeholder="owner"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label >Title</Form.Label>
                                <Form.Control name="title" placeholder="title"></Form.Control>
                            </Form.Group>
                            <Button type='submit'>Submit</Button>
                        </Form>
                        </Modal>
                        </React.Fragment>
                            );
                    }
}
export default withRouter(IssueAdd)