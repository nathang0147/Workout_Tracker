import {useState} from "react";

const WorkoutForm =  () => {
    const [workout, setWorkout] = useState({title: '', reps: '', sets: '', weight: '', videoID:'' , image: ''});
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newWorkout = {workout};
        const response = await fetch('/workouts',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newWorkout)
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
        }

        if(response.ok){
            setWorkout({title: '', reps: '', sets: '', weight: '', videoID:'' , image: ''});
            setError(null);
            console.log('new Workout create');
        }
    };


    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label> Excersize Title</label>
            <input
                type="text"
                required
                value={workout.title}
                onChange={(e) => setWorkout({...workout, title: e.target.value})}
            />
            <label>Reps</label>
            <input
                type="number"
                required
                value={workout.reps}
                onChange={(e) => setWorkout({...workout, reps: e.target.value})}
            />
            <label>Sets</label>
            <input
                type="number"
                required
                value={workout.sets}
                onChange={(e) => setWorkout({...workout, sets: e.target.value})}
            />
            <label>Weight (kg)</label>
            <input
                type="text"
                required
                value={workout.weight}
                onChange={(e) => setWorkout({...workout, weight: e.target.value})}
            />
            <label>Video ID</label>
            <input
                type="text"
                required
                value={workout.videoID}
                onChange={(e) => setWorkout({...workout, videoID: e.target.value})}
            />
            <label>Image</label>
            <input
                type="text"
                value={workout.image}
                onChange={(e) => setWorkout({...workout, image: e.target.value})}
            />
            <button>Submit</button>
            {error && <div className="error">{error}</div>}
        </form>

    );
};

export default WorkoutForm;
