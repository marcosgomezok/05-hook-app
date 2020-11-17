import  React  from 'react';
import { shallow } from 'enzyme';
import { HomeScreen } from './../../../components/09-useContext/HomeScreen';
import { UserContext } from './../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen/>', () => {

    const user = {
        name: 'marcos',
        email: 'marcos_go2015@hotmail.com'
    }
    //no se puede usar mount, react no lo soporta, despues buscar forma de ver el homescreen completo
    const wrapper = shallow(<UserContext.Provider value={{user}}>
        <HomeScreen/>
        </UserContext.Provider>)
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
