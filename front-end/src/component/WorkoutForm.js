import {useState} from "react";
import useWorkoutContext from "../Hook/useWorkoutContext";

const WorkoutForm =  () => {
    const {dispatch} = useWorkoutContext();

    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [sets, setSets] = useState('');
    const [weight, setWeight] = useState('');
    const [videoID, setVideoID] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newWorkout = {title, reps, sets, weight, videoID, image};
        const response = await fetch('/workouts',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newWorkout)
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }

        if(response.ok){
            setTitle('');
            setReps('');
            setSets('');
            setWeight('');
            setVideoID('');
            setImage('');
            setError(null);
            console.log('new Workout create');
            dispatch({type: 'CREATE_WORKOUT', payload: json});

        }
    };


    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label> Excersize Title</label>
            <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={emptyFields.includes('title') ? 'empty' : ''}
            />
            <label>Reps</label>
            <input
                type="number"
                required
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className={emptyFields.includes('reps') ? 'empty' : ''}
            />
            <label>Sets</label>
            <input
                type="number"
                required
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                className={emptyFields.includes('sets') ? 'empty' : ''}
            />
            <label>Weight (kg)</label>
            <input
                type="text"
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className={emptyFields.includes('weight') ? 'empty' : ''}
            />
            <label>Video ID</label>
            <input
                type="text"
                required
                value={videoID}
                onChange={(e) => setVideoID(e.target.value)}
                className={emptyFields.includes('videoID') ? 'empty' : ''}
            />
            <label>Image</label>
            <input
                type="text"
                value={image}
                onChange={(e) => setImage( e.target.value)}
            />
            <button>Submit</button>
            {error && <div className="error">{error}</div>}
        </form>

    );
};

export default WorkoutForm;