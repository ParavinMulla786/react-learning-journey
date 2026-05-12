
import React, { useReducer } from 'react'


const initialState ={coin:0,level:1}

function reducer(state,action){
    switch(action,type){
        case "COLLECT_COIN":
            return {...state, coin:state.coin+1};
            case "LOSS_COIN":
                return {...state, coin:state.coin-1};
                case "LEVEL_UP":
                    return{...state,;level:state.level+1};
                    case "COLLECT_5_COINS":
                        if(state.level >=2){
                            return{...state,coin:state.coin+5}
                        }
                        else{
                            return state;
                        }

                        case "BONUS":
                            if(state.level >=3){
                                return{...state,coin:state.coin+10}
                            }
                            else{
                                return state;
                            }
                            case "RESET":
                                return initialState;
                            default:
                                return state;
                            }
    }
}
const CoinCollector = () => {
    const[state,dispatch] = useReducer(coinReducer,initialState);
  return (
    <>
    <div>CoinCollector</div>
    <h1>coins:{state.coin}</h1>
    <h1>Level:{state.level}</h1>
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
    </>
  )
}

export default CoinCollector