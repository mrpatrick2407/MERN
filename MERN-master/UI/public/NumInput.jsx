function format(n){
return n!=null?n.toString():'';
}

function unformat(str){
    const val=parseInt(str,10)
    return Number.isNaN(val)?null:val;
}



export default class Numinput extends React.Component {
    constructor(props){
        super(props);
        this.state={value:format(props.value)}
    }
    onChange(e){
        if (e.target.value.match(/^\d*$/)) {
            this.setState({ value: e.target.value });
            console.log("hasdi");
        }
    }

    onBlur(e){
        const {onChange}=this.props;
        const value = this.state.value;
        onChange(e, unformat(value))
    }
    render(){
        const {value}=this.state;
        console.log(value)
        return(
            <input 
            type="text"
            value={value}
            onChange={this.onChange}
            onBlur={this.onBlur}/>
        )
    }

}