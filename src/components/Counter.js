import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux"; //for using redux we need this hook

const Counter = () => {
  const counter = useSelector((state) => state.counter); //it automatically uses subscriber,
  //so, every time a value changes in redux store this components gets re-renders;
  // console.log(counter);
  const dispatch = useDispatch(); //using a function to change states in store
  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" }); //type should be same as in store reducer function
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
