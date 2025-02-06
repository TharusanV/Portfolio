import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import '../stylesheets/bootUpStyle.css'

const BootUp = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate("/terminal");
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="reboot-container">
      {/* Glowing reboot box */}
      <motion.div
        className="reboot-box"
        animate={{ boxShadow: ["0px 0px 10px red", "0px 0px 30px red"] }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
      >
        <p className="reboot-text">{"< "} SYSTEM REBOOTING {" >"} </p>
        <p className="reboot-version">TV VER 2.1 SYS RECOVERY </p>
        <p className="reboot-progress">Process : {progress}%</p>
        
      </motion.div>
    </div>
  )
}

export default BootUp