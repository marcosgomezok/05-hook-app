import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext';
import { useState } from 'react';

export const MainApp = () => {

   const [user, setUser] = useState({})

    return (
            <UserContext.Provider value={{
                user,setUser
            }}>

                <AppRouter/>

            </UserContext.Provider>
    )
}
