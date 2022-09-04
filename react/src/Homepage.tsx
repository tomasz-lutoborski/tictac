import ResetButton from "./components/ResetButton";
import GameBoard from "./components/GameBoard";
import UserScore from "./components/UserScore";
import { useSelector } from "react-redux";
import { selectTurn } from "./features/game/gameSlice";

function Homepage() {
  const turn = useSelector(selectTurn);
  return (
    <>
      <ResetButton />
      <UserScore />
      <GameBoard />
      <UserScore />
      <p>{turn}</p>
    </>
  )
}

export default Homepage;