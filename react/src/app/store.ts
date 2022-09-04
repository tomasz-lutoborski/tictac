import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/game/gameSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer
  }
})

export type RootStore = ReturnType<typeof store.getState>;