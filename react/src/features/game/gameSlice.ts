import { createSlice } from "@reduxjs/toolkit";
import { RootStore } from "../../app/store";

export interface GameState {
  board: number[],
  turn: string
}
const initialState: GameState = {
  board: new Array(9).fill(0),
  turn: 'x'
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeTurn: (state) => {
      state.turn = state.turn === 'x' ? 'o' : 'x';
    }
  }
})

export const selectTurn = (state: RootStore) => state.game.turn;
export default gameSlice.reducer;