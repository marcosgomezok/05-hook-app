
import React from 'react';
import { shallow } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from './../../../components/09-useContext/UserContext';

describe('Pruebas en <AppRouter/>', () => {

    const user = {
        name: 'marcos',
        email: 'marcos_go2015@hotmail.com'
    }
    
    //no se puede usar mount en react 17
    const wrapper =  shallow(<UserContext.Provider value={{user}}>

        <AppRouter/>

    </UserContext.Provider>)
    

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
