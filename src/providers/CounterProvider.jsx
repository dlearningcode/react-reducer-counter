import { createContext, useReducer } from "react";
import { reducer } from "../reducers/CounterReducer";

export const CounterContext = createContext();

const initialState = {count: 0};

const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <CounterContext.Provider value={{ state, dispatch }}>
        {children}
        </CounterContext.Provider>
    );
}

export default CounterProvider;