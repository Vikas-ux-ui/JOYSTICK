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
    setGameCart: (state, action) => {
      const game = action.payload;

      if (!game) return;

      // Add to in-memory Redux cart if not already present
      if (!state.GameCart.some(g => g.id === game.id)) {
        state.GameCart.push(game);
      }

      // Safely update the user's stored cart in localStorage
      try {
        const counterLocal = localStorage.getItem("counter");
        const userKey = counterLocal ? `user${counterLocal}` : 'user';
        const stored = localStorage.getItem(userKey);
        if (!stored) return; // no logged-in user found, nothing to persist

        const userData = JSON.parse(stored) || {};
        userData.cart = userData.cart || [];

        // Avoid duplicate entries in stored cart
        if (!userData.cart.some(g => g.id === game.id)) {
          userData.cart.push(game);
          localStorage.setItem(userKey, JSON.stringify(userData));
        }
      } catch (err) {
        console.error('Error updating stored user cart', err);
      }
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
