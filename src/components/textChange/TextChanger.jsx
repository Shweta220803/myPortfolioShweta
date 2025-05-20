import React, { useState, useEffect } from "react";

const TextChanger = () => {
  const texts = [
    "Hi, I'm Shweta Bharti",
    "Welcome to my portfolio!",
    "Let's build something amazing together.",
  ];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fullText = texts[index];

      if (isForward) {
        if (endValue < fullText.length) {
          setEndValue((prev) => prev + 1);
        } else {
          setIsForward(false); // start deleting
        }
      } else {
        if (endValue > 0) {
          setEndValue((prev) => prev - 1);
        } else {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index]);

  useEffect(() => {
    setCurrentText(texts[index].substring(0, endValue));
  }, [endValue, index]);

  return (
    <div className="transition text-white ease-in-out duration-300">
      {currentText}
    </div>
  );
};

export default TextChanger;
