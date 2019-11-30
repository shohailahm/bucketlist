import React from 'react'
import './todo.css';
import CustomInput from '../components/Input';
import CustomSelect from '../components/Select';
import { Button,notification } from 'antd';
import TodoItems from '../components/TodoItems';
import { Collapse } from 'antd';
import { connect } from 'react-redux'
import { updateTodos } from '../store/action';
import CreateBucket from '../components/CreateBucket';

const { Panel } = Collapse;

const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Error',
      description:
        'Bucket with the name alredy exists !'
    });
  };

class TodoContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todoName:'',
            data:[{name:'default',lists:[]}],
            todotype:'default'
        }
    } 

    submit=()=>{
        let data=[...this.props.todos];
         let curBucket=data.findIndex((item,ind)=>{
             return item.name==this.state.todotype;
         });
         
          if(curBucket!==-1){
              let obj={label:this.state.todoName,status:0};
              data[curBucket].lists.push(obj);
              this.props.dispatch(updateTodos(data));
          }
          this.setState({todoName:''});
    
    }

    handleInput=(ev)=>{
     this.setState({todoName:ev.target.value})
    }

    handleSelect=(val)=>{
        this.setState({todotype:val})
    }

    createBucket=(name)=>{
        this.setState({creating:true});
        let found=this.props.todos.find((item)=>{
            return item.name==name;
        })
        if(found){
            this.setState({creating:false});

          return openNotificationWithIcon('error');
        }
             let data=[...this.props.todos];
             let obj={name:name,lists:[]};
             data.push(obj);
             this.props.dispatch(updateTodos(data));
             this.setState({creating:false});
    }
    render(){
        const {todos}=this.props;
        return(
            
                <div className="Wrapper">
                    <h3>Todo-List</h3>
                    <div className="row">
                     
                        <div style={{gridColumnStart:2}}>
                         <CustomInput placeholder="Enter Todo" value={this.state.todoName} onChange={this.handleInput}/>
                        </div>
                        <div style={{gridColumnStart:3}}>
                         <CustomSelect onChange={this.handleSelect} todos={todos}/>
                        </div>
                        <div style={{gridColumnStart:4}}>
                          <Button type="primary"  onClick={this.submit}>Submit</Button>
                         </div>
                        
                    </div>
                
                   
                   <div className="row">
                       
                         <div style={{gridColumnStart:2}}>
                          <CreateBucket create={this.createBucket} show={this.state.creating}/>
                         </div>
                       
                   </div>
                   <h3 style={{ marginVertical: 16 }}>List</h3>
                   {
                        todos.map((item,ind)=>(
                        <div className="center" key={ind}>
                        <Collapse accordion key={ind} style={{width:'60%',margin:'0 auto'}}>
                            <Panel header={item.name} key={ind}>
                             <TodoItems data={item.lists} name={item.name} Usekey={ind}/>
                            </Panel>
                        </Collapse>
                        </div>
                       
                       ))
                   }
                   
                </div>
               
                
            
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        todos:state.todos
    }
}
export default connect(mapStateToProps)(TodoContainer);