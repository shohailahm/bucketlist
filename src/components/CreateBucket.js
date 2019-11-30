import React from 'react';
import CustomInput from './Input';
import { Button } from 'antd';
import { Spin, Icon } from 'antd';
import '../containers/todo.css';


export default class CreateBucket extends React.Component{
    state={bucket:'',showForm:false}
    create=()=>{
       this.props.create(this.state.bucket);
    }
    handleChange=(ev)=>{
       this.setState({bucket:ev.target.value});
    }
    toggleShow=()=>{
        this.setState({showForm:!this.state.showForm})
    }


render(){
   
    return(
      <div style={{marginTop:16}}>
          {
              this.state.showForm?
              <div style={{position:'relative'}}> 
                 <div className={this.props.show?"overlay":"none"}>
                 {this.props.show && <Spin />}
                 </div>
                 
                <h3>Create Bucket</h3>    
                <CustomInput value={this.state.bucket} onChange={this.handleChange} placeholder="Bucket Name"/>
                <Button style={{marginTop:24}} onClick={this.create}>Create</Button>
                <Button style={{marginTop:24}} onClick={this.toggleShow}>Close</Button> 
              </div>:
              <Button onClick={this.toggleShow}>Create Bucket</Button>
    
    }
      </div>
    )
}
}