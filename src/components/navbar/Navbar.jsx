import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Srini Techie
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/srinivas.tamizhan" target="_blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/srinivasan-subramani-51723a22/" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="#" >
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
