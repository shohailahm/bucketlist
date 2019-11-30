
import React from 'react';
import {shallow} from 'enzyme';
import CustomSelect from './Select';



const setup=(initState={})=>{
    let wrapper=shallow(<CustomSelect todos={initState}/>);
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

  
    
})