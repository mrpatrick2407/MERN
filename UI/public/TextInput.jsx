function formatData(data){
    return data!=null?data:"";
}
function unformatData(data){
    return data.trim().length!=0?data:null;
}

export default class TextInput extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {value:formatData(props.value)}
        this.onChange = this.onChange.bind(this)
        this.onBlur = this.onBlur.bind(this)
    }
    onBlur(e){
        const {onChange}=this.props;
        const {value} = this.state;

        if(value!=null || value.length!=0){
        console.log({value})
            onChange(e,value)
        }
    }onChange(e){
        console.log(e.target.value)
        this.setState({value:e.target.value})
    }
    render(){
        const {value} = this.state;
        const { tag = 'input', ...props } = this.props;
        return React.createElement(tag, {
          ...props,
          value,
          onBlur: this.onBlur,
          onChange: this.onChange,
        });
    }
}