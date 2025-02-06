import { useState, useEffect } from "react";

import '../stylesheets/terminalStyle.css'

import { motion } from "framer-motion";

const Terminal = () => {

  const message = `
  Hello, Tharu....
  Wait...
  Who are you?
  Oh...you must be the guest he was talking about.
  Apologies, give me a second as I switch to the guest access
  In the meantime, here is a message he left for you
  `;  

  const message2 = `
  ------------------------------------------------------------
  ////////////////////////////////////////////////////////////
  ------------------------------------------------------------
  `;

  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < message.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + message[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Adjust speed here (lower = faster)

      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  return (
    <section className="terminal">
      <div>
        <motion.p
          className="terminal-intro-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayText}
        </motion.p>
      </div>
    </section>
  )
}

export default Terminal