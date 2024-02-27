import useWorkoutContext from "../Hook/useWorkoutContext";

//date format
import {format, formatDistanceToNow} from 'date-fns';

const WorkoutDetails = ({workout}) => {
    const{dispatch} = useWorkoutContext();

    const handleDelete = async () => {
        const response = await fetch('/workouts/' + workout._id, {
            method: 'DELETE'
        });

        const json = await response.json();
        if (!response.ok) {
            console.log('Failed to delete');
        }

        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json});
        }
    };

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${workout.videoID}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
            <p><strong>Reps:</strong> {workout.reps}</p>
            <p><strong>Sets:</strong> {workout.sets}</p>
            <p><strong>Load (kg):</strong> {workout.weight}</p>
            <p><strong>Image:</strong> {workout.image}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
            <span className={"material-symbols-outlined"} onClick={handleDelete}>Delete</span>
        </div>
    );
};

export default WorkoutDetails;