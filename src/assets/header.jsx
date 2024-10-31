// import React from "react";
// import "./style.css";
// import todo from "./img/Todo.png";
// import pic from "./img/pic.png";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div>
//       <header>
//         <div className="container">
//           <div className="content">
//             <img src={todo} alt="To Do" />
//             <div className="link">
//               <Link to="/home" className="active">
//                 Home
//               </Link>
//               <Link to="/about">About</Link>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };



import React from "react";
import "./style.css";
import todo from "./img/Todo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <img src={todo} alt="To Do" />
          <div className="link">
            <Link to="/home" className="active">
              Home
            </Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

