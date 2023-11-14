import { useContext } from "react";
import { CounterContext } from "../providers/CounterProvider";

const Counter = () => {
    const { state } = useContext(CounterContext);

    return (
        <h2 className="counter">Count: 
            <span className="counter-display">
                {state.count}
            </span>
        </h2>
    );
}

export default Counter;