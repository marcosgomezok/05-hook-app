import  React  from 'react';
import {shallow} from 'enzyme';
import {mount} from "enzyme";
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';

import { act } from '@testing-library/react';

describe('Pruebas en <TodoApp/>', () => {
    const wrapper = shallow(<TodoApp/>)

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de agregar un TODO', () => {

        /* la version de react usada ya no soporta mount
        const wrapper = mount ( < TodoApp /> );

         act(()=>{
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);

        }) 
        
        expect(wrapper.find('h1').text().trim()).toBe('Todo App ( 2 )');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        //expect(localStorage.setItem).toHaveBeenCalledWith({});
        */
       
    })
    
    test('debe de eliminar un todo', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id)
        
        expect(wrapper.find('h1').text().trim()).toBe('Todo App (0)');
    })
    
    
    
})
