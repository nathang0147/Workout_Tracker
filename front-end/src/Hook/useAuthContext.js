import {authContext} from "../context/AuthContext";
import {useContext} from "react";

const useWorkoutContext = () => {
    const {workouts, dispatch} = useContext(authContext); // the useContext is return the value of the context, in this case the value is the state and the dispatch
    if (!workouts) {
        throw new Error('useAuthContext must be inside a AuthContextProvider');
    }
    return {data: workouts, dispatch};

};

export default useWorkoutContext;
