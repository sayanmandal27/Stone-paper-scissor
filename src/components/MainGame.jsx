import React from "react";

function MainGame() {
  const emojis = [
    <h1 style={{ fontSize: "300px" }}>✊</h1>,
    <h1 style={{ fontSize: "300px" }}>✌️</h1>,
    <h1 style={{ fontSize: "300px" }}>🖐️</h1>,
  ];
  const [mainText, setmainText] = React.useState("Let's start the game");
  const [startbuttonText, setstartButtonText] = React.useState("Start");
  const [rollbuttonText, setrollButtonText] = React.useState("Play");
  const [emojiToShow, setemojiToShow] = React.useState([0, 0]);
  const [stopEnable, setstopEnable] = React.useState(false);

  const startButton = () => {
    setstartButtonText("");
    setmainText("Click play");
    setrollButtonText("Play");
  };
  const rollButton = () => {
    setstopEnable(true);
    setemojiToShow([0,0]);
    setrollButtonText("");
    setTimeout(() => {
      setmainText("Let's go");
    }, 1);
    setTimeout(() => {
      setmainText("Rock..");
    }, 2000);
    setTimeout(() => {
      setmainText("Paper..");
    }, 3000);
    setTimeout(() => {
      setmainText("Scissor!!!");
      let rand_num = Math.floor(Math.random() * 3);
      setemojiToShow([emojis[rand_num], 1]);
    }, 4000);
    setTimeout(() => {
      setmainText("Roll again if you think you can win! 😏");
      setrollButtonText("Againn!!");
      setstopEnable(false);
    }, 5500);
  };

  const stopButton = () => {
    setstartButtonText("Start");
    setemojiToShow([0, 0]);
    setmainText("You can't win this 😜");
  };

  return (
    <>
      <div
        className="container d-flex flex-column align-items-center justify-content-center text-center"
        style={{ height: "100vh" }}
      >
        <h1>{mainText}</h1>
        {startbuttonText === "Start" ? (
          <button className="btn btn-warning px-3 py-2" onClick={startButton}>
            {startbuttonText}
          </button>
        ) : (
          rollbuttonText !== "" && (
            <button
              className="btn btn-warning px-3 py-2"
              onClick={rollButton}
            >
              {rollbuttonText}
            </button>
          )
        )}

        {emojiToShow[1] !== 0 && emojiToShow[0]}

        {startbuttonText !== "Start" && (
          <button
            className="btn btn-warning mt-5 px-3 py-2"
            onClick={stopButton}
            disabled = {stopEnable}
          >
            Stop
          </button>
        )}
      </div>
    </>
  );
}

export default MainGame;
