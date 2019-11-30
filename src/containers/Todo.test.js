import React from 'react';
import TodoContainer from './Todo';
import {mount} from 'enzyme';
import { storeFactory } from '../testUtils';
import {Provider} from 'react-redux';

import { Button } from 'antd';

const setUp=(initalState={})=>{
    const store=storeFactory(initalState);
    const wrapper=mount(<Provider store={store}>
        <TodoContainer />
        </Provider>);
    return wrapper;
}

describe('Todo Container renders',()=>{
    let wrapper;
    beforeEach(()=>{
        const initalState={todos:[{name:'default bucket',lists:[]}]}
        wrapper=setUp(initalState);
        
    });
    test('renders ',()=>{
      expect(wrapper.exists()).toBe(true);
    });
    test('should render input component',()=>{
        expect(wrapper.find('CustomInput').length).toEqual(1);
    });
      test('should render button component',()=>{
        expect(wrapper.find(Button).length).toEqual(2);
    });
    test('should render select component',()=>{
        expect(wrapper.find('CustomSelect').length).toEqual(1);
    });
    test('should show list',()=>{
      
        expect(wrapper.props().store.getState().todos.length).toEqual(1);

    });
    test('should handle onChange', () => {
        wrapper.find("CustomInput").simulate("change",{
            target:{value:"hello"}
        });
        expect(wrapper.find("Input").props().value).toEqual("hello");
    });
})
