//logout is global stage is null
//json web token is removed from local storage

import useAuthContext from "./useAuthContext";
import useWorkoutContext from "./useWorkoutContext";

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const {dispatch: dispatchWorkout} = useWorkoutContext();
    const logout = () => {
        // remove user(token) from local storage
        localStorage.removeItem('user');

        //dispatch to remove user from global state
        dispatch({type: 'LOGOUT'});
        dispatchWorkout({type: 'SET_WORKOUTS', payload: null});
    }

    return {logout};
}