import { createContext } from "preact";
import { useReducer } from "preact/hooks";
import reducer from "./reducer";
import store from "./store";



// set up context, provider, consumer
const Context = createContext({});

// create a wrapper to provide context to react application
const ProviderComponent = ({ children }) => {
  let [state, dumbDispatch] = useReducer(reducer, store);

  const dispatch = (action) => {
    if (typeof action === "function") {
      action(dumbDispatch, state);
    } else {
      dumbDispatch(action);
    }
  };

  let value = { state, dispatch, dumbDispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { ProviderComponent };

export default Context;