import useFetch from "../Hook/useFetch";
import WorkoutDetails from "../component/WorkoutDetails";
import WorkoutForm from "../component/WorkoutForm";

const Home = () => {

    const {data: workouts, isPending, error} = useFetch('/workouts');


    return (
        <div className="home">
            <div className="workouts">
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {workouts && workouts.map((workout) => (

                        <WorkoutDetails key={workout.id} workout={workout}/>

                ))}
            </div>
            <WorkoutForm />
        </div>
    );
};

export default Home;
