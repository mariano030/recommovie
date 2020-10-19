import { useState } from "react";

function useStatefulFields() {
    const [values, setValues] = useState({});

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    console.log("useStatefulFields values: ", values);
    return [values, handleChange];
}

export default useStatefulFields;
