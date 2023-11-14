import { useContext } from "react";
import { CounterContext } from "../providers/CounterProvider";

const Counter = () => {
    const { state } = useContext(CounterContext);

    return (
        <h2 className="counter-display">Count: {state.count}</h2>
    );
}

export default Counter;