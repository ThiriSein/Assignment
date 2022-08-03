const { useReducer } = React

const initialState = {count: 0};

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

 const Count = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };
  
  return (
    <div className="box">
      <h1>Counter</h1>
      <p>Count: {state.count}</p>

      <div>
        <button type="button" onClick={handleIncrease}className="button is-grey">
          +
        </button>
        <button type="button" onClick={handleDecrease} className="button is-dark">
          -
        </button>
      </div>
    </div>
  );
}


ReactDOM.render(<Count />, document.getElementById("root"));