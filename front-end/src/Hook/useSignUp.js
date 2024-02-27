import {useState} from "react";
import useAuthContext from "./useAuthContext";


export const useSignup = () => {
    const [Error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {dispatch} = useAuthContext();

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const res = await fetch('/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.error);
            setIsLoading(false);
        }

        if (res.ok) {
            //store the jwt of user in the local storage
            localStorage.setItem('user', JSON.stringify(data));

            //update the golbal state with the user data
            dispatch({type: 'LOGIN', payload: data});
            setIsLoading(false);
        }


    };

    return {signup, isLoading, Error};
};

