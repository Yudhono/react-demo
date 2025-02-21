import { useReducer } from "react";
import "./App.css";

const initialState = { cart: [] };

function reducer(state, action) {
  switch (action.type) {
    case "addItem": {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.name === action.item
      );
      if (existingItemIndex !== -1) {
        return {
          cart: state.cart.map((item, index) =>
            index === existingItemIndex
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { name: action.item, count: 1 }] };
    }
    case "removeItem":
      return {
        cart: state.cart.filter((item, index) => index !== action.index),
      };
    case "updateItemCount":
      return {
        cart: state.cart.map((item, index) =>
          index === action.index
            ? { ...item, count: Math.max(1, action.count) }
            : item
        ),
      };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = (item) => {
    dispatch({ type: "addItem", item });
  };

  const removeItemFromCart = (index) => {
    dispatch({ type: "removeItem", index });
  };

  const updateItemCount = (index, count) => {
    dispatch({ type: "updateItemCount", index, count });
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <button onClick={() => addItemToCart("Apple")}>Add Apple</button>
      <button onClick={() => addItemToCart("Banana")}>Add Banana</button>
      <ul>
        {state.cart.map((item, index) => (
          <li key={index}>
            {item.name} (x{item.count}){" "}
            <button onClick={() => removeItemFromCart(index)}>Remove</button>
            <button onClick={() => updateItemCount(index, item.count + 1)}>
              +
            </button>
            <button
              onClick={() =>
                item.count > 1 && updateItemCount(index, item.count - 1)
              }
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
