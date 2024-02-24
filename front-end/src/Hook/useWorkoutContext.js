import {WorkoutContext} from "../context/WorkoutContext";
import {useContext} from "react";

const useWorkoutContext = () => {
    const {workouts, dispatch} = useContext(WorkoutContext); // the useContext is return the value of the context, in this case the value is the state and the dispatch
    if (!workouts || !dispatch) {
        throw new Error('useWorkoutContext must be used within a WorkoutContextProvider');
    }
    return {data: workouts, dispatch};

};

export default useWorkoutContext;
