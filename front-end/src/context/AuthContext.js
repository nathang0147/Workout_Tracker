// this context set global state for the user, and the user will be able to access the global state from any component,
// if they logout, the global state will be null

import {createContext, useEffect, useReducer} from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }
        case 'LOGOUT':
            return {
                user: null
            }
        default:
            return state;
    }
};

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            dispatch({type: 'LOGIN', payload: user});
        }
    }, []);

    console.log('auth context: ', state);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}