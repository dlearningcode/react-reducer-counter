import { useContext } from "react";
import { CounterContext } from "../providers/CounterProvider";

const MinusButton = () => {
    const { dispatch } = useContext(CounterContext);

    return (
        <button className="button count-button minus" onClick={() => dispatch({type: "minus"})}>Count Down</button>
    );
}

export default MinusButton;