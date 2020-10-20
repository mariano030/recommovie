// import useDp & useSel
import { useDispatch, useSelector } from "react-redux";

// get variables form state!!
const variable2 = useSelector((state) => state.variable2);
const dispatch = useDispatch();

/// ADD handlechange für onChange!!
const handleVanilla = (e) => {
    console.log("e.target.value", e.target.value);
    setVariable(e.target.value);
    dispatch(setRecMessage({e.taget.name: e.target.value}));
    console.log("variable", variable);

            setValues({
                ...values,
                [e.target.name]: e.target.value,
            });
};

<TextField
    value={variable}
    onChange={handleVanilla}
    id="input-with-icon-grid"
    label="With a grid"
/>;



// add CREDITS to more Details!

// oli dingens:
recData = {
    name1: "value1"
}
action.payload = {
    name2: "value2"
}

// erst noch recData neubauen
const newRecData = {
    ...state.recData,
    ...action.payload
}

// direkt innen state rein
const newState = {
    ...state,
    recData: {
        ...state.recData,
        ...action.payload
    }
}

        case "ADD_TO_REC_DATA":


        addToRecData(nameValueObj)