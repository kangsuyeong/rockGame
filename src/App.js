import { useState } from "react";
import "./App.css";
import GameBox from "./components/GameBox";

const choice = {
  rock: {
    name: "Rock",
    img: "assets/rock.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "assets/scissors.jpg",
  },
  paper: {
    name: "Paper",
    img: "assets/paper.jpg",
  },
  default: {
    name: "default",
    img: "assets/game.jpg",
  },
};

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색이 바뀐다.(이기면 초록, 지면-빨강 비기면 -검은색)
function App() {
  const [user, setUser] = useState(choice["default"]);
  const [computer, setComputer] = useState(choice["default"]);
  const [result, setResult] = useState("GAME START");

  const random = () => {
    let itemArray = Object.keys(choice);
    let num = Math.floor(Math.random() * (itemArray.length - 1));
    return choice[itemArray[num]];
  };

  const judgment = (user, com) => {
    if (user.name === com.name) {
      return "tie";
    } else if (user.name === "Scissors")
      return com.name === "Rock" ? "lose" : "win";
    else if (user.name === "Rock") return com.name === "Paper" ? "lose" : "win";
    else if (user.name === "Paper")
      return com.name === "Scissors" ? "lose" : "win";
  };

  const play = (item) => {
    setUser(choice[item]);
    let computerChoice = random();
    setComputer(computerChoice);
    setResult(judgment(choice[item], computerChoice));
    console.log("result", result);
  };

  return (
    <div className="mainContainer">
      <div className="gameContainer">
        <GameBox data={user} title={"you"} result={result} />
        <GameBox data={computer} title={"computer"} result={result} />
      </div>

      <div>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
