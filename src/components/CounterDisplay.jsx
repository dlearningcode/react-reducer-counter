import { useContext } from "react";
import { CounterContext } from "../providers/CounterProvider";

const Counter = () => {
    const { state } = useContext(CounterContext);

    return (
        <div className="counter">
            <h2>Count: {' '}
                <span className="counter-display">
                    {state.count}
                </span>
            </h2>
        </div>
    );
}

export default Counter;