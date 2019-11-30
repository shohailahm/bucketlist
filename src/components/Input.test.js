import React from 'react';
import {shallow} from 'enzyme';
import CustomInput from './Input';

const setup=()=>{
    let wrapper=shallow(<CustomInput/>);
    return wrapper;
}
describe('Input Component',()=>{
    let wrapper;
    beforeEach(()=>{
      wrapper=setup();
    });

    test('should render', () => {
        expect(wrapper.exists()).toBe(true);
    });

  
    
})