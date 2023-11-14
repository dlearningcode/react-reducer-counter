import { useContext } from "react";
import { CounterContext } from "../providers/CounterProvider";

const ResetButton = () => {
    const { dispatch } = useContext(CounterContext);

    return (
        <button className="button reset-button" onClick={() => dispatch({type: "reset"})}>Reset</button>
    );
}

export default ResetButton;