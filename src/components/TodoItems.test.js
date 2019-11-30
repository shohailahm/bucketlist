
import React from 'react';
import {shallow} from 'enzyme';
import TodoItems from './TodoItems';



const setup=(initState={})=>{
    let wrapper=shallow(<TodoItems data={initState}/>);
    return wrapper;
}
describe('select Component',()=>{
    let wrapper;
    beforeEach(()=>{
        const initState=[{name:"default",lists:[]}];
      wrapper=setup(initState);
    });

    test('should render', () => {
        expect(wrapper.exists()).toBe(true);
    });
    test('should render List', () => {
        expect(wrapper.find('List')).toEqual({});
    });
  
    
})