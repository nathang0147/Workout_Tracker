import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState('')
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})//the signal is used to cancel the fetch request by abort controller
            .then(res => {
                if (!res.ok || !res.headers.get('content-type').includes('application/json')) {
                    throw Error('Could not fetch the data for that resourse');
                }
                return res.json();


            })
            .then(data => {
                setIsPending(false);
                setData(data);
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
    }, [url]);

    return {data, isPending, error};
};

export default useFetch;
