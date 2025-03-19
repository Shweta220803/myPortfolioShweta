import React, { useState, useEffect } from "react";

const TextChanger = () => {
  const text = ["Hi, I'm Shweta Bharti", "Welcome to my portfolio!", "Let's build something amazing together."];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0); // Tracks the number of characters being shown
  const [isForward, setIsForward] = useState(true); // Direction of text animation (typing or deleting)
  const [index, setIndex] = useState(0); // Current index of the text being displayed

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isForward) {
        // Typing text
        setEndValue((prev) => prev + 1);
      } else {
        // Deleting text
        setEndValue((prev) => prev - 1);
      }

      if (endValue === text[index].length) {
        setIsForward(false); // Switch to deleting text once the full text is typed
      } else if (endValue === 0 && !isForward) {
        setIsForward(true); // Start typing again once the text is fully deleted
        setIndex((prev) => (prev + 1) % text.length); // Move to the next text in the array
      }
    }, 150); // Typing speed (milliseconds)

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, text]);

  useEffect(() => {
    setCurrentText(text[index].substring(0, endValue)); // Update the text based on the current progress
  }, [endValue, index, text]);

  return <div className="transition ease-in-out duration-300">{currentText}</div>;
};

export default TextChanger;
