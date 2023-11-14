import { useContext } from "react";
import { CounterContext } from "../providers/CounterProvider";

const PlusButton = () => {
    const { dispatch } = useContext(CounterContext);

    return (
        <button onClick={() => dispatch({type: "plus"})}>Count Up</button>
    );
}

export default PlusButton;