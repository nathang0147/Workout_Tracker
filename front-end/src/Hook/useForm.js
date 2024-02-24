import { useState } from 'react';

function useForm(initialState, onSubmit) {
    const [values, setValues] = useState(initialState);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(values);
    };

    return { values, handleChange, handleSubmit };
}