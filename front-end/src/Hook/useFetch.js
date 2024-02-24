import {useEffect, useState} from "react";
import useWorkoutContext from "./useWorkoutContext";

const useFetch = (url, action) => {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const {data, dispatch} = useWorkoutContext();

    useEffect(()=> {
        const abortCont = typeof AbortController !== 'undefined' ? new AbortController() : null;

        fetch(url, {signal: abortCont.signal})//the signal is used to cancel the fetch request by abort controller
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                const contentType = res.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    throw Error('Received content is not JSON');
                }
                return res.json();


            })
            .then(data => {
                console.log('Fetch data: ' +JSON.stringify(data, null, 2));
                setIsPending(false);
                dispatch({type: action, payload: data})
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            })
        //this is a cleanup function
        return () => abortCont.abort();
    }, [url, action, dispatch]);

    return {data, isPending, error};
};

export default useFetch;
