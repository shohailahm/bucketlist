import React from 'react';
import { List, Typography, Button } from 'antd';
import CustomInput from './Input';
import { connect } from 'react-redux';
import { updateTodos } from '../store/action';

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            editing:false
        }
    }
    changetodo=(ev)=>{
      this.setState({editVal:ev.target.value})
    }
    handleEdit=()=>{
      this.setState({editing:true});
    }
    handleDelete=()=>{
        debugger
        let todos=[...this.props.todos];
        let arr=todos[this.props.Usekey].lists;
         arr.splice(this.props.ind,1);
         todos[this.props.Usekey].lists=arr;
        this.props.dispatch(updateTodos(todos));
        this.handleCancel();
    }
    handleUpdate=()=>{
        let todos=[...this.props.todos];
        todos[this.props.Usekey].lists[this.props.ind].label=this.state.editVal;
        this.props.dispatch(updateTodos(todos));
        this.handleCancel()
    }
    handleCancel=()=>{
        this.setState({editing:false});
    }
    handleStatus=()=>{

        let todos=[...this.props.todos];
        let status=todos[this.props.Usekey].lists[this.props.ind].status;
        todos[this.props.Usekey].lists[this.props.ind].status=!status;
        this.props.dispatch(updateTodos(todos));
        //this.props.changeStatus(this.props.key,this.props.ind);
    }
render(){
   
    const {onChange,item,key,...rest}=this.props;
    console.log(item.status);
    return(
        <div style={{ justifyContent:'space-between',
            width:'100%',
            color:'#000'}}>
             {this.state.editing?
             <CustomInput onChange={this.changetodo} defaultValue={item.label}/>
             :<Typography.Text strong onClick={this.handleStatus}  style={{textDecorationLine:item.status?'line-through':'none'}}>{item.label}</Typography.Text>} 
           {!item.status?this.state.editing?<Button type="link" onClick={this.handleUpdate}>Update</Button>:<Button type="link" onClick={this.handleEdit}>edit</Button>:null} 
            {this.state.editing?<Button type="link" onClick={this.handleCancel}>Cancel</Button>:<Button type="link" onClick={this.handleDelete}>delete</Button>}
       </div>
    )
}
}

const mapStateToProps=(state)=>{
    return{
         todos:state.todos
    }
}
export default connect(mapStateToProps)(TodoItem);