import { useEffect, useState } from "react";

function App() {
  const colores = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
    "#800080",
    "#008000",
    "#000080",
    "#800000",
    "#808080",
    "#FFC0CB",
    "#FF00A6",
    "#00FF9B",
    "#FF7F00",
    "#B22222",
    "#008080",
    "#8000FF",
    "#FFD700",
    "#FF6347",
    "#7FFF00",
    "#CD5C5C",
    "#6495ED",
    "#FF4500",
    "#FF69B4",
    "#8A2BE2",
    "#A52A2A",
    "#DC143C",
    "#00FFFF",
    "#00008B",
    "#008B8B",
    "#B8860B",
    "#A9A9A9",
    "#006400",
    "#BDB76B",
    "#8B008B",
    "#556B2F",
    "#FF8C00",
    "#9932CC",
    "#8B0000",
    "#E9967A",
    "#8FBC8F",
    "#483D8B",
    "#2F4F4F",
    "#00CED1",
    "#9400D3",
    "#FF1493",
    "#00BFFF",
    "#696969",
    "#1E90FF",
    "#B22222",
    "#FFFAF0",
    "#228B22",
    "#FF00FF",
    "#DCDCDC",
    "#F8F8FF",
    "#FFD700",
    "#DAA520",
    "#808080",
    "#008000",
    "#ADFF2F",
    "#F0FFF0",
    "#FF69B4",
    "#CD5C5C",
    "#4B0082",
    "#FFFFF0",
    "#F0E68C",
    "#E6E6FA",
    "#FFF0F5",
    "#7CFC00",
    "#FFFACD",
    "#ADD8E6",
    "#F08080",
    "#E0FFFF",
    "#FAFAD2",
    "#D3D3D3",
    "#90EE90",
    "#FFB6C1",
    "#FFA07A",
    "#20B2AA",
    "#87CEFA",
    "#778899",
    "#B0C4DE",
    "#FFFFE0",
    "#00FF00",
    "#32CD32",
    "#FAF0E6",
    "#FF00FF",
    "#800000",
    "#66CDAA",
    "#0000CD",
    "#BA55D3",
    "#9370DB",
    "#3CB371",
    "#7B68EE",
    "#00FA9A",
    "#48D1CC",
    "#C71585",
    "#191970",
    "#F5FFFA",
    "#FFE4E1",
    "#FFE4B5",
    "#FFDEAD",
    "#000080",
    "#FDF5E6",
    "#808000",
    "#6B8E23",
    "#FFA500",
    "#FF4500",
    "#DA70D6",
    "#EEE8AA",
    "#98FB98",
    "#AFEEEE",
    "#DB7093",
    "#FFEFD5",
    "#FFDAB9",
    "#CD853F",
    "#FFC0CB",
    "#DDA0DD",
  ];

  const [shuffledColores, setShuffledColores] = useState([""]);
  const [randomNumWinner, setRandomNumWinner] = useState<any>();
  const [answer, setAnswer] = useState("");

  const StartGame = () => {
    setAnswer("");
    const shuffled = colores.sort(() => Math.random() - 0.5);
    setShuffledColores(shuffled);
    setRandomNumWinner(Math.floor(Math.random() * 3) + 1);
  };
  useEffect(() => {
    StartGame();
  }, []);

  const handleClick = (e: any) => {
    e.target.innerHTML == shuffledColores[randomNumWinner]
      ? setAnswer("¡Correcto! Te quiero mi Zwina😁")
      : setAnswer("incorrecto, No te quiero mi Zwina😥 ");
  };
  return (
    <div className="flex justify-center items-center h-screen flex-col font-mono">
      <div>
        {answer ? (
          <button
            className="bg-gray-500 hover:bg-gray-400 rounded p-1 mb-2 text-white text-lg font-bold"
            onClick={StartGame}
          >
            Empezar de nuevo
          </button>
        ) : (
          <div className="mb-2 text-lg  font-black">¡ADIVINA EL COLOR!</div>
        )}
      </div>
      <div
        className=" w-52 h-52"
        style={{ backgroundColor: shuffledColores[randomNumWinner] }}
      ></div>

      {answer ? (
        answer
      ) : (
        <div className=" w-60 flex justify-between">
          <div
            className=" mt-2 p-1 rounded cursor-pointer text-white hover:bg-gray-400 border-gray-500 bg-gray-500"
            onClick={handleClick}
          >
            {shuffledColores[0]}
          </div>
          <div
            className=" mt-2 p-1 rounded cursor-pointer text-white hover:bg-gray-400 border-gray-500 bg-gray-500"
            onClick={handleClick}
          >
            {shuffledColores[1]}
          </div>
          <div
            className=" mt-2 p-1 rounded cursor-pointer text-white hover:bg-gray-400 border-gray-500 bg-gray-500"
            onClick={handleClick}
          >
            {shuffledColores[2]}
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default App;
