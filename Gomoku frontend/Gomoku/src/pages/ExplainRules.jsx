import { useState } from "react";
import { useNavigate } from "react-router-dom";

const instructions = {
 en: {
 title: "How to Play Gomoku",
 content: `
 Gomoku is a strategy board game played on a 15x15 grid. Players take turns placing their symbols
 (X or O) on the board. The goal is to connect five in a row, column, or diagonal before your opponent.

 **Rules:**
 1. The game starts with an empty 15x15 board.
 2. X always goes first.
 3. Players alternate turns, placing one symbol per turn.
 4. The first player to align five in a row, column, or diagonal wins.
 5. Once placed, symbols cannot be moved.
 `,
 },
};

const HowToPlay = () => {
 const navigate = useNavigate();
 const [language, setLanguage] = useState("en");

 return (
 <div
 className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6"
 style={
 {
 backgroundImage: `url('https://img.lovepik.com/bg/20240423/Neon-Lit-Corridor-with-Futuristic-Vibe-Stunning-3D-Rendering-of_7231493_wh300.jpg')`,
 backgroundSize: "cover",
 backgroundPosition: "center",
 }
 }
 >
 <img
 src="https://play-lh.googleusercontent.com/Q0XSlWCUteCae7XIXl5eW5u-HhujWiGdVpAMbGkeiUWubTJFdGNAtNS65Jjiqa4FWcM=w526-h296-rw"
 alt="Gomoku Title"
 className="w-64 h-auto mb-4 rounded-lg"
 />

 <h1 className="text-3xl font-bold mb-6 bg-black bg-opacity-50 p-2 rounded-lg">
 {instructions[language].title}
 </h1>

 {/* Language Selector */}
 <select
 onChange={(e) => setLanguage(e.target.value)}
 value={language}
 className="mb-4 px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg"
 >
 <option value="en">🇬🇧 English</option>
 </select>

 {/* Instructions Box */}
 <div className="w-full max-w-3xl bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
 <p className="whitespace-pre-line">{instructions[language].content}</p>
 </div>

 {/* Back Button */}
 <button
 onClick={() => navigate(-1)}
 className="mt-6 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
 >
 Back
 </button>
 </div>
 );
};

export default HowToPlay;
