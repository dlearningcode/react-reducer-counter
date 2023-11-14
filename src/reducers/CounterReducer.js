export const reducer = (state, action) => {
    switch (action.type) {
        case 'plus':
        return { count: state.count + 1 };
        case 'minus':
        return { count: state.count - 1 };
        case 'reset':
        return { count: 0 };
        default:
        throw new Error();
    }
}