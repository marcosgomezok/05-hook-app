import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { shallow } from 'enzyme';
import { useCounter } from '../../../hooks/useCounter';

//const { shallow} = require("enzyme")

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />', () => {

    useCounter.mockReturnValue({
        counter:10,
        increment:()=>{}
    })


    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data:null,
            loading: true,
            error:null

        })
        
        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de mostrar la informacion', () => {
        useFetch.mockReturnValue({
            data:[{
                author: 'Marcos',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error:null

        })

        const wrapper = shallow(<MultipleCustomHooks/>);

        expect(wrapper.find('alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Marcos'); 
        
        //console.log(wrapper.html())

        

    })
    
    
})
