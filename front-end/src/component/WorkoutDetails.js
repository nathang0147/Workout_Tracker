const WorkoutDetails = ({workout}) => {
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
            <p>{workout.createdAt}</p>
        </div>
    );
};

export default WorkoutDetails;
