import React from 'react';
import {shallow} from 'enzyme';
import CreateBucket from './CreateBucket';
import { Button } from 'antd';



const setup=(initState={})=>{
    let wrapper=shallow(<CreateBucket />);
    return wrapper;
}
describe('bucket Component',()=>{
    let wrapper;
    beforeEach(()=>{
         const initState={show:false};
      wrapper=setup(initState);
    });

    test('should render', () => {
        expect(wrapper.exists()).toBe(true);
    });
    test('should hide spinner', () => {
        expect(wrapper.find('Spin').length).toEqual(0);
    });
    test('should show button', () => {
        
        expect(wrapper.find("Button").length).toEqual(1);
    });
    
})