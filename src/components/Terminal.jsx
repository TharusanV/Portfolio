import { useState, useEffect } from "react";

import '../stylesheets/terminalStyle.css'

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const Terminal = () => {

  const navigate = useNavigate();

  const message = `
  Hello, Tharu...
  Wait...
  Who are you?
  Oh...you must be the guest he was talking about.
  Apologies, give me a second as I switch to the guest access
  In the meantime, here is a message he left for you
  ...
  `;  

  const message2 = `
  ------------------------------------------------------------
  ////////////////////////////////////////////////////////////
  ------------------------------------------------------------

  `;

  const message3 = `Hello there! My name is Tharusan 
  I'm a computer science graduate
  and this is my portfolio site
  Feel free to give me any feedback, take care :)
  ...
  `;  

  const message4 = `To see available commands
  type 'help' and hit ENTER or RETURN

  `;
  
  const message5 = `guest@TV.com ~$ `; 


  const [displayTextM1, setDisplayTextM1] = useState("");
  const [displayTextM2, setDisplayTextM2] = useState("");
  
  const [charIndexM1, setCharIndexM1] = useState(0);
  const [charIndexM2, setCharIndexM2] = useState(0);
  
  const [isFinishedM1, setIsFinishedM1] = useState(false);
  const [isFinishedM2, setIsFinishedM2] = useState(false);
  
  useEffect(() => {
    if (!isFinishedM1 && charIndexM1 < message.length) {
      const timeout = setTimeout(() => {
        setDisplayTextM1((prev) => prev + message[charIndexM1]);
        setCharIndexM1((prev) => prev + 1);
      }, 50); // Adjust speed here
  
      return () => clearTimeout(timeout);
    } else if (charIndexM1 === message.length) {
      setIsFinishedM1(true);
    }
  }, [charIndexM1, message]);
  
  useEffect(() => {
    if (isFinishedM1 && charIndexM2 < message3.length) {
      const timeout = setTimeout(() => {
        setDisplayTextM2((prev) => prev + message3[charIndexM2]);
        setCharIndexM2((prev) => prev + 1);
      }, 50); // Adjust speed here
  
      return () => clearTimeout(timeout);
    } else if (charIndexM2 === message3.length) {
      setIsFinishedM2(true);
    }
  }, [charIndexM2, message3, isFinishedM1]);
  
  //////////////////////////////////////////////////////////////////////////////////////////////////

  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents form submission (if inside a form)

      if (inputValue.trim() !== '') {
        if (inputValue === "help") {
          setHistory((prevHistory) => [...prevHistory, <>
            <span>Available commands:</span><br/>
            <span style={{marginLeft: "20px"}}>start</span><span style={{marginLeft: "40px"}}></span><br/>
            <span style={{marginLeft: "20px"}}>reboot</span><span style={{marginLeft: "40px"}}>restart the site</span><br/>
            <br/>
          </>]);
        }
        else if(inputValue === "start"){
          navigate("/computer");
        } 
        else {
          setHistory((prevHistory) => [...prevHistory, <>
            <span>command not found: {inputValue}</span><br/>
            <span>to see available commands, use 'help'</span><br/>
            <br/>
          </>]);
        }
      }

      else{
        setHistory((prevHistory) => [...prevHistory, <>
          <span>{message5}</span><br/>
          <br/>
        </>]);
      }

      setInputValue(""); // Clear input after submission 
    }
  };
  

  return (
    <section className="terminal">
      <div>
        <motion.p
          className="terminal-intro-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayTextM1}
        </motion.p>

        {isFinishedM1 && <motion.p
          className="terminal-lines-text"
        >
          {message2}
        </motion.p>}

        <motion.p
          className="terminal-intro-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayTextM2}
        </motion.p>


        {isFinishedM2 && <motion.p
          className="terminal-lines-text"
        >
          {message2}
        </motion.p>}

        {isFinishedM2 && <motion.p
          className="terminal-lines-text"
        >
          {message4}
        </motion.p>}

        {isFinishedM2 && <motion.p
          className="terminal-lines-text"
        >
          {history}
        </motion.p>}

        {isFinishedM2 && 
          <div className="terminal-writing-container">
            {message5}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={inputValue == "" ? "▯" : ""}
            />
          </div>}

      </div>
    </section>
  )
}

export default Terminal