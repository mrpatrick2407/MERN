import {Collapse,Alert} from 'react-bootstrap'
export default class Toast extends React.Component{
componentDidUpdate(){
    const {showing ,onDismiss} = this.props
    if(showing){
        clearTimeout(this.dismissTimer)
        this.dismissTimer=setTimeout(onDismiss,5000)
    }
}
componentWillUnmount() {
        clearTimeout(this.dismissTimer);
}
      render(){
        const showing=this.props.showing;
        const onDismiss=this.props.onDismiss;
        const children=this.props.children;
        console.log("Working in toast"+showing +children);
        return(
        <Collapse in={showing}>
            <div style={{position:'absolute',bottom:'20px;',left:'20px'}}>
                <Alert onDismiss={onDismiss}  >
                    {children}
                </Alert>
            </div>
        </Collapse>
        )
      }

}