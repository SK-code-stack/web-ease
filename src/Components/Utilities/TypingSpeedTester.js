import React, { useState, useEffect } from 'react';

const sampleText = "Technology is constantly evolving, shaping the way we communicate, work, and live. The internet connects people worldwide, enabling instant access to information. Innovation drives progress, improving efficiency and convenience. As digital tools advance, adapting to change is crucial. Learning new skills helps individuals stay competitive in an ever-changing world.";

export default function TypingSpeedTester() {
  const [inputText, setInputText] = useState("");
  const [timer, setTimer] = useState(180); // 3 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const handleChange = (e) => {
    if (!isRunning) setIsRunning(true);
    const newText = e.target.value;
    setInputText(newText);
  
    // Calculate WPM only for correct words
    const correctWords = sampleText
      .split(" ")
      .filter((word, index) => word === newText.trim().split(/\s+/)[index]);
  
    const timeElapsed = (180 - timer) / 60; // Convert seconds to minutes
    if (timeElapsed > 0) setWordsPerMinute(Math.round(correctWords.length / timeElapsed));
  };
  

  const getHighlightedText = () => {
    return sampleText.split("").map((char, index) => {
      let inputChar = inputText[index] || ""; // Get corresponding user input character
      let isCorrect = inputChar === char;
      let isExtra = index >= inputText.length; // If user hasn't typed this character yet
  
      return (
        <span
          key={index}
          className={isExtra ? "text-gray-500" : isCorrect ? "text-green-500" : "text-red-500"}
        >
          {char}
        </span>
      );
    });
  };
  

  const resetTest = () => {
    setInputText("");
    setTimer(180);
    setIsRunning(false);
    setWordsPerMinute(0);
  };

  return (
    <div className="pb-10 pt-20 w-full h-full flex flex-col items-center justify-center bg-mywhite dark:bg-mydark transition-colors duration-300 px-4">
      <div className="text-center mb-6">
        <h1 className="text-mydark dark:text-mylight text-3xl font-bold font-myfont">Typing Speed Test</h1>
        <p className="font-myfont text-mydark dark:text-mylight text-lg mt-2">"Type Fast, Think Faster!" 🚀</p>
      </div>

        <div className="w-full max-w-2xl">
            <div 
        className="text-lg font-myfont mb-4 p-4 bg-mylight dark:bg-mydark rounded-md shadow-upper text-mydark dark:text-mylight dark:shadow-dupper transition-all duration-300"
        onCopy={(e) => e.preventDefault()} // Disable copying
        onContextMenu={(e) => e.preventDefault()} // Disable right-click
      >
        {getHighlightedText()}
          </div>
      </div>
      
      <div className="w-full max-w-2xl">
      <textarea
        id="textArea"
        value={inputText}
        onChange={handleChange}
        rows={5}
        className="w-full p-4 bg-mylight dark:bg-mydark focus:outline-none text-mydark dark:text-mylight rounded-md shadow-upper dark:shadow-dupper transition-all duration-300"
        placeholder="Start typing here..."
        onPaste={(e) => e.preventDefault()} // Disable paste
        onCopy={(e) => e.preventDefault()} // Disable copying
        onContextMenu={(e) => e.preventDefault()} // Disable right-click
        />

      </div>
      
      <div className="mt-4 text-lg text-mydark dark:text-mylight">
        Time Left: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')} | WPM: {wordsPerMinute}
      </div>

      <button 
        onClick={resetTest} 
        className='font-myfont mt-4 bg-mylight shadow-Bupper active:shadow-Bact dark:bg-mydark dark:text-mylight dark:shadow-Bdupper dark:active:shadow-Bdact py-1 px-3  border-transparent rounded-xl transition-all duration-300 cursor-pointer mr-2'
        >
        Restart Test
      </button>
    </div>
  );
}
