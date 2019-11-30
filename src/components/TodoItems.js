import React from 'react';
import { List, Typography } from 'antd';
import TodoItem from './TodoItem';

export default class TodoItems extends React.Component{
    changeStatus=()=>{
        this.props.changeStatus();
    }
render(){
    
    const {onChange,data,...rest}=this.props;
    return(
        <div style={{ flex: '0 0 100%',
            maxWidth:'100%',
            justifyContent:'center',
            alignItems:'center',
            color:'#000'}} >
            
            <List
            bordered
            loading={false}
            dataSource={data}
            renderItem={(item,ind) => (
                
                <List.Item style={{width:'100%'}}>
                    
                    <TodoItem item={item} ind={ind}  changeStatus={this.changeStatus} {...rest}/>
                </List.Item>
            )}
            />
    </div>
    )
}
}