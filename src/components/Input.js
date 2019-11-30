import React from 'react';
import { Input } from 'antd';


export default class CustomInput extends React.Component{
render(){
    const {onChange,...rest}=this.props;
    return(
        <Input onChange={onChange} {...rest}/>
    )
}
}