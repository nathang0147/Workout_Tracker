//context provide the global state to the app that allows the other components to access the state

import { createContext, useReducer} from "react";

export const WorkoutContext = createContext();


// The smart way to use this to general the CRUD operations
// but it is the locally state in client not in database, we keep it sync with the database
export const workoutReducer = (state,action)=>{ //the "state" is the previous state, the action is the object that contains the type and the payload
    switch (action.type) {
        case 'SET_WORKOUTS':
            console.log('Updated state:', action.payload); // Add this line
            return {
                ...state,
                workouts: action.payload
            };


        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts], //the new workout is added to the array of workouts,
                // the ...state.workouts is the rest state that not changed
            };
        case 'DELETE_WORKOUT':
            return{
                ...state,
                workouts: state.workouts.filter((workout) => workout._id !== action.payload) //the workout is removed from the array of workouts
            }

        default:
            return state;
    }
}

export const WorkoutContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: [],
    });// the first argument is the reducer function and the second argument is the initial state


    return (
        <WorkoutContext.Provider value={{...state,dispatch}}>
            {children}
        </WorkoutContext.Provider>
    );
};
