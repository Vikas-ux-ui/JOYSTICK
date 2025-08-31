import { createSlice } from "@reduxjs/toolkit";
const counter = localStorage.getItem("counter") ;

export const gameSlice = createSlice({
  initialState: {
    gameData: [],
    Action: [],
    RPG: [],
    Shooter: [],
    Puzzle: [],
    Adventure: [],
    Indie: [],
    Platform: [],
    GameCart:[],
  },
  name: "gamesHiiigame",
  reducers: {
    setUserGameCart:(state,action)=>{
      state.GameCart=[...state.GameCart,action.payload];
    },
    setGameCart:(state,actions)=>{
      console.log("action " ,actions.payload);
      state.GameCart=[...state.GameCart,actions.payload];
      const userData=JSON.parse(localStorage.getItem(`user${counter}`));
      
      userData.cart.push(actions.payload);
      console.log(userData);

      localStorage.removeItem(`user${counter}`);
      localStorage.setItem(`user${counter}`,JSON.stringify(userData));

    },
    removeGameFromCart: (state, action) => {

  state.GameCart = state.GameCart.filter(game => game.id !== action.payload);

 
  const userData = JSON.parse(localStorage.getItem(`user${counter}`));

  if (userData) {
    userData.cart = state.GameCart;

    localStorage.setItem(`user${counter}`, JSON.stringify(userData));
  }
},

    setGameData: (state, actions) => {
      state.gameData = actions.payload;

      state.gameData.map((data) => {
        data.genres.map((genre) => {
          let genreName = genre.name;

          if (state[genreName] !== undefined) {
            
            state[genreName].push(data);
          }
        });
      });
    },

    setLogOutGame:(state)=>{
      state.GameCart.length=0;
    }
  },
});

export const {setLogOutGame, setGameData ,setGameCart,removeGameFromCart,setUserGameCart} = gameSlice.actions;
