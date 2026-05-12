import React, { useReducer } from "react";

const initialCoinState = {
  coin: 0,
  level: 1,
};

function coinReducer(state, action) {
  switch (action.type) {

    case "COLLECT_COIN":
      return {
        ...state,
        coin: state.coin + 1,
      };

    case "LOSE_COIN":
      return {
        ...state,
        coin: state.coin > 0 ? state.coin - 1 : 0,
      };

    case "LEVEL_UP":
      return state.coin >= 10
        ? {
            ...state,
            coin: 0,
            level: state.level + 1,
          }
        : state;

    case "COLLECT_5_COINS":
      return state.level >= 2
        ? {
            ...state,
            coin: state.coin + 5,
          }
        : state;

    case "BONUS":
      return state.level >= 3
        ? {
            ...state,
            coin: state.coin + 10,
          }
        : state;

    case "RESET":
      return {
        coin: 0,
        level: 1,
      };

    default:
      return state;
  }
}

const CoinCollector = () => {

  const [state, dispatch] = useReducer(
    coinReducer,
    initialCoinState
  );

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>COIN COLLECTOR GAME</h1>

      <h2>Coins: {state.coin}</h2>
      <h2>Level: {state.level}</h2>

      <button
        onClick={() =>
          dispatch({ type: "COLLECT_COIN" })
        }
      >
        Collect Coin
      </button>

      <button
        onClick={() =>
          dispatch({ type: "LOSE_COIN" })
        }
        style={{ marginLeft: "10px" }}
      >
        Lose Coin
      </button>

      <br />
      <br />

      <button
        onClick={() =>
          dispatch({ type: "LEVEL_UP" })
        }
      >
        Level Up
      </button>

      <button
        disabled={state.level < 2}
        onClick={() =>
          dispatch({ type: "COLLECT_5_COINS" })
        }
        style={{ marginLeft: "10px" }}
      >
        Collect 5 Coins
      </button>

      <button
        disabled={state.level < 3}
        onClick={() =>
          dispatch({ type: "BONUS" })
        }
        style={{ marginLeft: "10px" }}
      >
        Bonus +10
      </button>

      <br />
      <br />

      <button
        onClick={() =>
          dispatch({ type: "RESET" })
        }
      >
        Reset
      </button>

      <br />
      <br />

      {state.level < 2 && (
        <p>Reach Level 2 to unlock Collect 5 Coins</p>
      )}

      {state.level < 3 && (
        <p>Reach Level 3 to unlock Bonus</p>
      )}
    </div>
  );
};

export default CoinCollector;