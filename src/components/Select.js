import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default class CustomSelect extends React.Component{
render(){
    const {onChange,todos,...rest}=this.props;

    return(
        <Select defaultValue={todos[0].name} style={{ width: 120 }}  onChange={onChange} {...rest}>
           
            {
                todos && todos.map((item,i)=>(
                <Option value={item.name} key={item.name}>{item.name}</Option>
                ))
            }
        </Select>
    )
}
}